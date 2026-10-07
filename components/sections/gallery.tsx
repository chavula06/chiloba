import { motion } from 'framer-motion';
import { ImageIcon, Video, Music as MusicIcon, Award, Church, Users, Radio as RadioIcon, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { SAMPLE_GALLERY } from '@/lib/constants';
import type { GalleryItem } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GALLERY_CATEGORIES = [
  { key: 'all', label: 'All', icon: BookOpen },
  { key: 'teaching', label: 'Teaching', icon: BookOpen },
  { key: 'events', label: 'Events', icon: Users },
  { key: 'church', label: 'Church', icon: Church },
  { key: 'music', label: 'Music', icon: MusicIcon },
  { key: 'radio', label: 'Radio', icon: RadioIcon },
  { key: 'students', label: 'Students', icon: Users },
  { key: 'awards', label: 'Awards', icon: Award },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered = activeCategory === 'all'
    ? SAMPLE_GALLERY
    : SAMPLE_GALLERY.filter((g) => g.category === activeCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse into teaching, events, ministry, music, and radio work.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden border border-gray-800 bg-[#161B22] cursor-pointer"
              onClick={() => { setSelectedItem(item); setLightboxOpen(true); }}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {item.category === 'videos' ? (
                  <Video className="h-12 w-12 text-gray-600 group-hover:text-blue-400 transition-colors" />
                ) : item.category === 'music' ? (
                  <MusicIcon className="h-12 w-12 text-gray-600 group-hover:text-blue-400 transition-colors" />
                ) : (
                  <ImageIcon className="h-12 w-12 text-gray-600 group-hover:text-blue-400 transition-colors" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{item.description}</p>
              </div>
              <Badge variant="secondary" className="absolute top-2 left-2">{item.category}</Badge>
            </motion.div>
          ))}
        </div>

        {lightboxOpen && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setLightboxOpen(false)}>
            <div className="relative max-w-3xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close lightbox"
              >
                ✕
              </button>
              <div className="bg-[#161B22] rounded-2xl border border-gray-700 p-6">
                <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                  <p className="text-gray-500">Media Preview</p>
                </div>
                <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                <p className="text-gray-400 mt-2">{selectedItem.description}</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <Badge variant="secondary">{selectedItem.category}</Badge>
                  <span>{selectedItem.date}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}