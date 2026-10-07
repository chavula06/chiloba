  import { SAMPLE_RESOURCES } from '@/lib/constants';
import type { Resource } from '@/lib/types';

export async function getResources(filters?: {
  search?: string;
  category?: string;
  grade?: string;
  difficulty?: string;
  premiumStatus?: string;
  sortBy?: string;
  page?: number;
  limit?: number;
}): Promise<{ resources: Resource[]; total: number }> {
  let filtered = [...SAMPLE_RESOURCES];

  if (filters?.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.subject.toLowerCase().includes(q) ||
        r.topic.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (filters?.category) {
    filtered = filtered.filter((r) => r.category === filters.category);
  }

  if (filters?.grade) {
    filtered = filtered.filter((r) => r.grade === filters.grade);
  }

  if (filters?.difficulty) {
    filtered = filtered.filter((r) => r.difficulty === filters.difficulty);
  }

  if (filters?.premiumStatus) {
    filtered = filtered.filter((r) => r.premiumStatus === filters.premiumStatus);
  }

  if (filters?.sortBy) {
    switch (filters.sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
        break;
      case 'popular':
        filtered.sort((a, b) => b.downloads - a.downloads);
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'difficulty':
        const diffOrder = { Beginner: 1, Intermediate: 2, Advanced: 3, Expert: 4 };
        filtered.sort((a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty]);
        break;
    }
  }

  const total = filtered.length;
  const page = filters?.page ?? 1;
  const limit = filters?.limit ?? 12;
  const start = (page - 1) * limit;
  const resources = filtered.slice(start, start + limit);

  return { resources, total };
}

export async function getResourceBySlug(slug: string): Promise<Resource | null> {
  return SAMPLE_RESOURCES.find((r) => r.id === slug) ?? null;
}

export async function getTrendingResources(): Promise<Resource[]> {
  return [...SAMPLE_RESOURCES]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 5);
}

export async function getRecentlyUploaded(): Promise<Resource[]> {
  return [...SAMPLE_RESOURCES]
    .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
    .slice(0, 5);
}

export async function getRelatedResources(resourceId: string): Promise<Resource[]> {
  const resource = SAMPLE_RESOURCES.find((r) => r.id === resourceId);
  if (!resource) return [];
  return SAMPLE_RESOURCES.filter((r) => r.id !== resourceId && (r.category === resource.category || r.subject === resource.subject)).slice(0, 4);
}

export async function getResourcesByCategory(category: string): Promise<Resource[]> {
  return SAMPLE_RESOURCES.filter((r) => r.category === category);
}

export async function getResourcesByGrade(grade: string): Promise<Resource[]> {
  return SAMPLE_RESOURCES.filter((r) => r.grade === grade);
}