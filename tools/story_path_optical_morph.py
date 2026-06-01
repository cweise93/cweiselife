from __future__ import annotations

import argparse
import math
from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageOps


def extract_frames(
    sprite_path: Path,
    frame_width: int,
    frame_height: int,
    frame_count: int,
    columns: int,
) -> list[Image.Image]:
    sprite = Image.open(sprite_path).convert("RGB")
    frames: list[Image.Image] = []

    for index in range(frame_count):
        x = (index % columns) * frame_width
        y = (index // columns) * frame_height
        frame = sprite.crop((x, y, x + frame_width, y + frame_height))
        frames.append(frame)

    return frames


def pil_to_bgr(image: Image.Image) -> np.ndarray:
    rgb = np.asarray(image.convert("RGB"), dtype=np.uint8)
    return cv2.cvtColor(rgb, cv2.COLOR_RGB2BGR)


def bgr_to_pil(image: np.ndarray) -> Image.Image:
    rgb = cv2.cvtColor(np.clip(image, 0, 255).astype(np.uint8), cv2.COLOR_BGR2RGB)
    return Image.fromarray(rgb)


def build_grid(height: int, width: int) -> tuple[np.ndarray, np.ndarray]:
    x_coords, y_coords = np.meshgrid(
        np.arange(width, dtype=np.float32),
        np.arange(height, dtype=np.float32),
    )
    return x_coords, y_coords


def farneback_flow(source_gray: np.ndarray, target_gray: np.ndarray) -> np.ndarray:
    return cv2.calcOpticalFlowFarneback(
        source_gray,
        target_gray,
        None,
        pyr_scale=0.5,
        levels=5,
        winsize=31,
        iterations=5,
        poly_n=7,
        poly_sigma=1.5,
        flags=0,
    )


def warp_toward(
    image: np.ndarray,
    flow: np.ndarray,
    x_coords: np.ndarray,
    y_coords: np.ndarray,
    amount: float,
) -> np.ndarray:
    map_x = x_coords - (flow[..., 0] * amount)
    map_y = y_coords - (flow[..., 1] * amount)
    return cv2.remap(
        image,
        map_x,
        map_y,
        interpolation=cv2.INTER_CUBIC,
        borderMode=cv2.BORDER_REFLECT_101,
    )


def morph_frames(start: Image.Image, end: Image.Image, count: int) -> list[Image.Image]:
    start_bgr = pil_to_bgr(start)
    end_bgr = pil_to_bgr(end)
    start_gray = cv2.cvtColor(start_bgr, cv2.COLOR_BGR2GRAY)
    end_gray = cv2.cvtColor(end_bgr, cv2.COLOR_BGR2GRAY)

    flow_start_to_end = farneback_flow(start_gray, end_gray)
    flow_end_to_start = farneback_flow(end_gray, start_gray)
    height, width = start_gray.shape
    x_coords, y_coords = build_grid(height, width)

    frames: list[Image.Image] = []
    for index in range(1, count + 1):
        t = index / (count + 1)
        eased = 0.5 - 0.5 * math.cos(math.pi * t)
        warped_start = warp_toward(start_bgr, flow_start_to_end, x_coords, y_coords, eased)
        warped_end = warp_toward(end_bgr, flow_end_to_start, x_coords, y_coords, 1 - eased)
        blended = cv2.addWeighted(warped_start, 1 - eased, warped_end, eased, 0)
        frames.append(bgr_to_pil(blended))

    return frames


def build_contact_sheet(frames: list[Image.Image]) -> Image.Image:
    thumb_width = 320
    thumb_height = 240
    columns = 4
    rows = math.ceil(len(frames) / columns)
    label_height = 36
    sheet = Image.new("RGB", (columns * thumb_width, rows * (thumb_height + label_height)), "#f3f6fa")

    for index, frame in enumerate(frames):
        column = index % columns
        row = index // columns
        x = column * thumb_width
        y = row * (thumb_height + label_height)
        fitted = ImageOps.fit(frame, (thumb_width, thumb_height), method=Image.Resampling.LANCZOS)
        sheet.paste(fitted, (x, y))

        label = Image.new("RGB", (thumb_width, label_height), "#ffffff")
        sheet.paste(label, (x, y + thumb_height))

    return sheet


def write_sprite_sheet(
    frames: list[Image.Image],
    output_path: Path,
    frame_width: int,
    frame_height: int,
    columns: int,
) -> None:
    rows = math.ceil(len(frames) / columns)
    sprite = Image.new("RGB", (columns * frame_width, rows * frame_height), "#000000")

    for index, frame in enumerate(frames):
        x = (index % columns) * frame_width
        y = (index // columns) * frame_height
        sprite.paste(frame, (x, y))

    output_path.parent.mkdir(parents=True, exist_ok=True)
    sprite.save(output_path, format="WEBP", quality=92, method=6)


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate optical-flow in-between frames for the story-path sprite sheet.")
    parser.add_argument("--sprite-path", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--frame-width", type=int, default=480)
    parser.add_argument("--frame-height", type=int, default=360)
    parser.add_argument("--frame-count", type=int, default=188)
    parser.add_argument("--columns", type=int, default=8)
    parser.add_argument("--start-frame", type=int, required=True)
    parser.add_argument("--end-frame", type=int, required=True)
    parser.add_argument("--replace-start", type=int, required=True)
    parser.add_argument("--replace-count", type=int, required=True)
    parser.add_argument("--write-sprite-path", type=Path)
    args = parser.parse_args()

    frames = extract_frames(
        sprite_path=args.sprite_path,
        frame_width=args.frame_width,
        frame_height=args.frame_height,
        frame_count=args.frame_count,
        columns=args.columns,
    )

    start = frames[args.start_frame]
    end = frames[args.end_frame]
    generated = morph_frames(start, end, args.replace_count)

    args.output_dir.mkdir(parents=True, exist_ok=True)
    start.save(args.output_dir / "start_frame.png")
    end.save(args.output_dir / "end_frame.png")

    preview_frames = [start, *generated, end]
    for index, frame in enumerate(preview_frames):
        frame.save(args.output_dir / f"preview_{index:02d}.png")

    contact_sheet = build_contact_sheet(preview_frames)
    contact_sheet.save(args.output_dir / "contact_sheet.png")
    preview_frames[0].save(
        args.output_dir / "preview.gif",
        save_all=True,
        append_images=preview_frames[1:],
        duration=90,
        loop=0,
        disposal=2,
    )

    if args.write_sprite_path:
        updated_frames = list(frames)
        for offset, frame in enumerate(generated):
            updated_frames[args.replace_start + offset] = frame

        write_sprite_sheet(
            updated_frames,
            output_path=args.write_sprite_path,
            frame_width=args.frame_width,
            frame_height=args.frame_height,
            columns=args.columns,
        )


if __name__ == "__main__":
    main()
