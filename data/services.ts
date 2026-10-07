import { SAMPLE_SERVICES } from '@/lib/constants';
import type { Service } from '@/lib/types';

export async function getServices(): Promise<Service[]> {
  return SAMPLE_SERVICES;
}

export async function getServiceById(id: string): Promise<Service | null> {
  return SAMPLE_SERVICES.find((s) => s.id === id) ?? null;
}

export async function getPopularServices(): Promise<Service[]> {
  return SAMPLE_SERVICES.filter((s) => s.popular);
}