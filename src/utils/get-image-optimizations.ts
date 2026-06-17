import { getImage } from 'astro:assets';
import type { ImgHTMLAttributes } from 'react';

export async function getImageOptimizations(
  urls: string[],
): Promise<Record<string, ImgHTMLAttributes<HTMLImageElement>>> {
  const optimizations = await Promise.all(
    urls.map(async (url) => {
      const image = await getImage({
        src: url,
        width: 270,
        height: 200,
        format: 'webp',
        fit: 'cover',
        position: 'center',
      });

      return [url, image.attributes];
    }),
  );

  return Object.fromEntries(optimizations);
}
