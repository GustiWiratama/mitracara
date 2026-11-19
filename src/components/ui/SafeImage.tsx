"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

const FALLBACK_IMAGE = "/images/placeholder.svg";

type SafeImageProps = Omit<ImageProps, "src"> & {
  src?: string;
};

/** Image with a local placeholder when mock data has no usable image. */
export function SafeImage({ src, alt, ...props }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = !src || hasError ? FALLBACK_IMAGE : src;

  return (
    <Image
      {...props}
      src={resolvedSrc}
      alt={alt}
      onError={() => {
        if (!hasError) setHasError(true);
      }}
    />
  );
}
