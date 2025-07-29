'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface PostImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
}

export default function PostImage({ src, alt, className, width, height, priority = false }: PostImageProps) {
  const fallbackSrc = `https://placehold.co/${width}x${height}/EEE/31343C?text=Image+Not+Found`;
  
  // اگر src ورودی معتبر نبود (null, undefined, یا خالی)، از همان ابتدا از fallbackSrc استفاده کن
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  // این useEffect اطمینان حاصل می‌کند که اگر کامپوننت با پراپ جدیدی رندر شد، تصویر آپدیت شود
  useEffect(() => {
    setImgSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <Image
      className={className || "h-48 w-full object-cover"}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      onError={() => {
        // در صورت بروز خطای 404 یا خطای بارگذاری، تصویر را با fallback جایگزین کن
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
