export interface ResponsiveImageSet {
  src: string;
  srcset: string;
}

export const DEFAULT_IMAGE_WIDTHS = [480, 960, 1600] as const;
export const CARD_IMAGE_WIDTHS = [480, 960] as const;
export const HERO_IMAGE_WIDTHS = [480, 960, 1600] as const;

const FALLBACK_FORMAT = 'jpg';

/**
 * Builds the src and srcset values for images that now have optimized
 * `{baseName}-{width}w.jpg` siblings next to the original PNG.
 */
export function buildResponsiveImageSet(
  path: string | null | undefined,
  widths: readonly number[] = DEFAULT_IMAGE_WIDTHS,
  format = FALLBACK_FORMAT
): ResponsiveImageSet {
  if (!path) {
    return { src: '', srcset: '' };
  }

  const lastDotIndex = path.lastIndexOf('.');
  if (lastDotIndex === -1) {
    return { src: path, srcset: '' };
  }

  const basePath = path.slice(0, lastDotIndex);
  const uniqueWidths = Array.from(new Set(widths)).sort((a, b) => a - b);
  const largestWidth = uniqueWidths[uniqueWidths.length - 1];

  const srcset = uniqueWidths
    .map(width => `${basePath}-${width}w.${format} ${width}w`)
    .join(', ');

  return {
    src: `${basePath}-${largestWidth}w.${format}`,
    srcset
  };
}
