"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({ src, alt, className = "" }: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center ${className}`}>
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
            {alt.charAt(0).toUpperCase()}
          </div>
          <div className="text-gray-300 font-medium">{alt}</div>
          <div className="text-gray-500 text-sm mt-1">Project Preview</div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={handleImageError}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ objectFit: 'cover' }}
    />
  );
}
