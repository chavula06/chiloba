import { SAMPLE_TESTIMONIALS } from '@/lib/constants';
import type { Testimonial } from '@/lib/types';

export async function getTestimonials(): Promise<Testimonial[]> {
  return SAMPLE_TESTIMONIALS.filter((t) => t.approved);
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return SAMPLE_TESTIMONIALS.filter((t) => t.approved && t.featured);
}

export async function getTestimonialsByType(type: string): Promise<Testimonial[]> {
  return SAMPLE_TESTIMONIALS.filter((t) => t.approved && t.type === type);
}