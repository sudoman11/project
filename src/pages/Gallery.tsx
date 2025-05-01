import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  placeholder: string;
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'events', name: 'School Events' },
    { id: 'sports', name: 'Sports' },
    { id: 'cultural', name: 'Cultural Activities' },
    { id: 'campus', name: 'Campus' }
  ];
  
  const galleryImages: GalleryImage[] = [
    { id: 1, title: 'Annual Day Celebration', category: 'events', placeholder: 'Annual Day Image' },
    { id: 2, title: 'Science Exhibition', category: 'events', placeholder: 'Science Exhibition Image' },
    { id: 5, title: 'Dance Performance', category: 'cultural', placeholder: 'Dance Performance Image' },
    { id: 7, title: 'School Building', category: 'campus', placeholder: 'School Building Image' },
    { id: 9, title: 'Sports Day', category: 'events', placeholder: 'Sports Day Image' },
    { id: 10, title: 'Extracurricular Activities', category: 'cultural', placeholder: 'Exctracurricular activities' },
  ];
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);
  
  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">School Gallery</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse through our collection of photographs showcasing the various events, activities, and memorable moments at Riverside Academy.
          </p>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md group cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-square bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {image.placeholder}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">View</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{image.title}</h3>
                <p className="text-sm text-gray-500 capitalize">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found for this category.</p>
          </div>
        )}
      </div>
      
      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-4xl w-full mx-auto">
            <div className="bg-gray-200 aspect-video rounded flex items-center justify-center text-gray-400 text-xl">
              {lightboxImage.placeholder}
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-xl font-medium">{lightboxImage.title}</h3>
              <p className="text-gray-300 capitalize">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;