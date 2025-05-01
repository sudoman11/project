import React from 'react';

interface ImagePlaceholderProps {
  text: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  text, 
  className = '', 
  aspectRatio = 'square' 
}) => {
  let aspectClass = 'aspect-square';
  
  switch (aspectRatio) {
    case 'video':
      aspectClass = 'aspect-video';
      break;
    case 'portrait':
      aspectClass = 'aspect-[3/4]';
      break;
    case 'landscape':
      aspectClass = 'aspect-[4/3]';
      break;
    default:
      aspectClass = 'aspect-square';
  }
  
  return (
    <div className={`${aspectClass} bg-gray-200 flex items-center justify-center text-gray-400 ${className}`}>
      {text}
    </div>
  );
};

export default ImagePlaceholder;