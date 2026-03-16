import { services } from "@/data/services";
import { locations } from "@/data/locations";

export function getAllSlugs(): string[] {
  const serviceSlugs = services.map((s) => s.slug);
  const locationSlugs = locations.map((l) => l.slug);
  return [...serviceSlugs, ...locationSlugs];
}

export function isServiceSlug(slug: string): boolean {
  return services.some((s) => s.slug === slug);
}

export function isLocationSlug(slug: string): boolean {
  return locations.some((l) => l.slug === slug);
}
