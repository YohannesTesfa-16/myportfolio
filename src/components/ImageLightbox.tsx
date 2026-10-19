import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxProps {
  imageSrc: string | null;
  imageTitle: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  imageSrc,
  imageTitle,
  onClose,
}) => {
  if (!imageSrc) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          title="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#0d0f12] shadow-2xl">
          <img
            src={imageSrc}
            alt={imageTitle}
            className="max-h-[80vh] w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="p-3 bg-[#08090a]/90 backdrop-blur-md border-t border-neutral-800 flex items-center justify-between text-xs font-mono-tech text-neutral-400">
            <span className="text-white font-medium">{imageTitle}</span>
            <span className="text-[#bef264]">HIGH-RESOLUTION INSPECTION VIEW</span>
          </div>
        </div>
      </div>
    </div>
  );
};
