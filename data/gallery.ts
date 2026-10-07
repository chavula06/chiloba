import { SAMPLE_GALLERY } from '@/lib/constants';
import type { GalleryItem } from '@/lib/types';

export async function getGallery(): Promise<GalleryItem[]> {
  return SAMPLE_GALLERY;
}

export async function getGalleryByCategory(category: string): Promise<GalleryItem[]> {
  return SAMPLE_GALLERY.filter((g) => g.category === category);
}

export async function getGalleryItemById(id: string): Promise<GalleryItem | null> {
  return SAMPLE_GALLERY.find((g) => g.id === id) ?? null;
}