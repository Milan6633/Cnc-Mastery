import { getCollection } from 'astro:content';

export async function getAllModules() {
  const modules = await getCollection('modules');
  return modules.sort((a, b) => a.data.number - b.data.number);
}

export async function getModuleBySlug(slug: string) {
  const modules = await getAllModules();
  return modules.find(m => m.data.slug === slug);
}

export async function getAllLessons() {
  const lessons = await getCollection('lessons');
  return lessons
    .filter(l => !l.data.draft)
    .sort((a, b) => {
      if (a.data.module !== b.data.module) {
        return a.data.module.localeCompare(b.data.module);
      }
      return a.data.lessonNumber - b.data.lessonNumber;
    });
}

export async function getLessonsByModule(moduleSlug: string) {
  const allLessons = await getAllLessons();
  return allLessons.filter(l => l.data.module === moduleSlug);
}

export async function getAdjacentLessons(moduleSlug: string, lessonNumber: number) {
  const allLessons = await getAllLessons();
  const currentIndex = allLessons.findIndex(
    l => l.data.module === moduleSlug && l.data.lessonNumber === lessonNumber
  );

  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const next = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return { prev, next };
}

export function getLessonUrl(lesson: { data: { module: string }; id: string }) {
  // The id from glob loader is the filename without extension (e.g., "01-shop-safety/01-osha-standards")
  return `/module/${lesson.id}`;
}

export function getModuleUrl(moduleSlug: string) {
  return `/module/${moduleSlug}`;
}

export const levelInfo: Record<string, { name: string; color: string; badgeClass: string }> = {
  foundation: { name: 'Foundation', color: 'var(--color-level-1)', badgeClass: 'badge-foundation' },
  core: { name: 'Core CNC', color: 'var(--color-level-2)', badgeClass: 'badge-core' },
  advanced: { name: 'Advanced', color: 'var(--color-level-3)', badgeClass: 'badge-advanced' },
  specialist: { name: 'Specialist', color: 'var(--color-level-4)', badgeClass: 'badge-specialist' },
};
