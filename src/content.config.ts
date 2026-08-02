import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// --- Esquema para lecciones MDX ---
const lessonSchema = z.object({
  title: z.string(),
  slug: z.string(),
  module: z.string(),
  level: z.enum(['Inicial', 'Intermedio', 'Avanzado', 'Beginner', 'Intermediate', 'Advanced']),
  objectives: z.array(z.string()),
  prerequisites: z.array(z.string()),
  history: z.object({
    introducedIn: z.string(),
    context: z.string(),
    evolution: z.string().optional(),
  }).optional(),
  realWorldExamples: z.array(z.object({
    domain: z.string(),
    description: z.string(),
    code: z.string(),
    result: z.string(),
  })),
  hasInteractive: z.boolean().default(false),
  comparisons: z.array(z.object({
    title: z.string(),
    items: z.array(z.object({
      name: z.string(),
      features: z.record(z.string(), z.string()),
    })),
    recommendation: z.string(),
  })).optional(),
  videos: z.array(z.object({
    url: z.string(),
    title: z.string(),
    channel: z.string(),
    duration: z.string().optional(),
    summary: z.string(),
  })),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })),
  sources: z.array(z.object({
    title: z.string(),
    url: z.string(),
    date: z.string(),
  })),
  status: z.enum(['borrador', 'revisado', 'publicado']),
  lastReviewed: z.string(),
});

// --- Esquema para quizzes JSON ---
const quizSchema = z.object({
  id: z.string(),
  lessonSlug: z.string(),
  level: z.enum(['basico', 'avanzado']),
  questions: z.array(z.object({
    id: z.string(),
    question: z.string(),
    options: z.array(z.string()),
    correctIndex: z.number(),
    explanations: z.array(z.string()),
  })),
});

// --- Esquema para ejercicios JSON ---
const exerciseSchema = z.object({
  id: z.string(),
  lessonSlug: z.string(),
  title: z.string(),
  difficulty: z.enum(['facil', 'normal', 'dificil']),
  description: z.string(),
  template: z.string(),
  hints: z.array(z.string()),
  solution: z.string(),
  solutionExplanation: z.string(),
  expectedOutput: z.string(),
});

// --- Esquema para módulos JSON ---
const moduleSchema = z.object({
  id: z.string(),
  slug: z.string(),
  number: z.number(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  status: z.enum(['disponible', 'proximamente', 'en-progreso']),
  lessonCount: z.number(),
  lessons: z.array(z.string()),
});

// --- Colecciones ---
export const collections = {
  lessons: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/lessons' }),
    schema: lessonSchema,
  }),
  quizzes: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/quizzes' }),
    schema: quizSchema,
  }),
  exercises: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/exercises' }),
    schema: z.array(exerciseSchema),
  }),
  modules: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/modules' }),
    schema: moduleSchema,
  }),
  // --- Versiones en inglés (rutas /en/) ---
  lessonsEn: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/en-lessons' }),
    schema: lessonSchema,
  }),
  quizzesEn: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/en-quizzes' }),
    schema: quizSchema,
  }),
  exercisesEn: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/en-exercises' }),
    schema: z.array(exerciseSchema),
  }),
  modulesEn: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/en-modules' }),
    schema: moduleSchema,
  }),
};
