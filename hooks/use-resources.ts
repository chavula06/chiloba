import { useQuery } from '@tanstack/react-query';
import { getResources } from '@/data/resources';
import type { ResourceFilterData } from '@/lib/validations';

export function useResources(filters?: ResourceFilterData) {
  return useQuery({
    queryKey: ['resources', filters],
    queryFn: () => getResources(filters),
    placeholderData: (previousData) => previousData,
  });
}

export function useResource(slug: string) {
  return useQuery({
    queryKey: ['resource', slug],
    queryFn: () => getResourceBySlug(slug),
    enabled: !!slug,
  });
}