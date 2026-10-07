import { useQuery } from '@tanstack/react-query';
import { getTestimonials } from '@/data/testimonials';

export function useTestimonials() {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
  });
}

export function useFeaturedTestimonials() {
  return useQuery({
    queryKey: ['testimonials', 'featured'],
    queryFn: getFeaturedTestimonials,
  });
}