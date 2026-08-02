type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

/** Prefixes static image paths with the GitHub Pages base path. */
export default function imageLoader({ src }: ImageLoaderProps): string {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//")) {
    return src;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${src}`;
}
