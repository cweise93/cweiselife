export interface ScrollSequenceSegment {
  image: string;
  index: number;
  hold_start_frame: number;
  hold_end_frame: number;
  transition_start_frame: number | null;
  transition_end_frame: number | null;
  next_image: string | null;
  scroll_progress_start: number;
  scroll_progress_end: number;
}

export interface ScrollSequenceManifest {
  total_frames: number;
  segments: ScrollSequenceSegment[];
  source_dir: string;
  target_size: {
    width: number;
    height: number;
  };
  fps: number;
  frames_per_transition: number;
  hold_frames: number;
  frame_pattern: string;
  prefix?: string | null;
  dominant_size_only?: boolean;
  dropped_images?: string[];
}

export interface SpriteSheetManifest {
  sprite_sheet: string;
  frame_width: number;
  frame_height: number;
  frame_count: number;
  columns: number;
  rows: number;
}

export interface ScrollSpriteFrameState {
  frameIndex: number;
  backgroundPositionX: string;
  backgroundPositionY: string;
  backgroundSize: string;
  segment: ScrollSequenceSegment;
}

export function clampProgress(progress: number): number {
  if (Number.isNaN(progress)) {
    return 0;
  }
  return Math.min(1, Math.max(0, progress));
}

export function frameIndexForProgress(progress: number, totalFrames: number): number {
  const normalized = clampProgress(progress);
  return Math.min(totalFrames - 1, Math.round(normalized * Math.max(totalFrames - 1, 0)));
}

export function segmentForFrame(frameIndex: number, manifest: ScrollSequenceManifest): ScrollSequenceSegment {
  return (
    manifest.segments.find((segment) => {
      const segmentEnd = segment.transition_end_frame ?? segment.hold_end_frame;
      return frameIndex >= segment.hold_start_frame && frameIndex <= segmentEnd;
    }) ?? manifest.segments[manifest.segments.length - 1]!
  );
}

export function spritePositionForFrame(
  frameIndex: number,
  spriteManifest: SpriteSheetManifest
): Pick<ScrollSpriteFrameState, 'backgroundPositionX' | 'backgroundPositionY' | 'backgroundSize'> {
  const column = frameIndex % spriteManifest.columns;
  const row = Math.floor(frameIndex / spriteManifest.columns);
  const maxColumn = Math.max(spriteManifest.columns - 1, 1);
  const maxRow = Math.max(spriteManifest.rows - 1, 1);

  return {
    backgroundPositionX: `${(column / maxColumn) * 100}%`,
    backgroundPositionY: `${(row / maxRow) * 100}%`,
    backgroundSize: `${spriteManifest.columns * 100}% ${spriteManifest.rows * 100}%`
  };
}

export function scrollSpriteFrameState(
  progress: number,
  sequenceManifest: ScrollSequenceManifest,
  spriteManifest: SpriteSheetManifest
): ScrollSpriteFrameState {
  const frameIndex = frameIndexForProgress(progress, sequenceManifest.total_frames);
  return {
    frameIndex,
    ...spritePositionForFrame(frameIndex, spriteManifest),
    segment: segmentForFrame(frameIndex, sequenceManifest)
  };
}
