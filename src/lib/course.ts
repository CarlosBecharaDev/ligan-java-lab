import type { Lang } from './i18n';

/** Prefijo de ruta para un idioma dado ('' en español, '/en' en inglés). */
export function localePrefix(locale: Lang): string {
  return locale === 'en' ? '/en' : '';
}

/** Devuelve el nombre de la colección de lecciones según el idioma. */
export function lessonCollection(locale: Lang): 'lessons' | 'lessonsEn' {
  return locale === 'en' ? 'lessonsEn' : 'lessons';
}

/** Devuelve el nombre de la colección de quizzes según el idioma. */
export function quizCollection(locale: Lang): 'quizzes' | 'quizzesEn' {
  return locale === 'en' ? 'quizzesEn' : 'quizzes';
}

/** Devuelve el nombre de la colección de ejercicios según el idioma. */
export function exerciseCollection(locale: Lang): 'exercises' | 'exercisesEn' {
  return locale === 'en' ? 'exercisesEn' : 'exercises';
}

/** Devuelve el nombre de la colección de módulos según el idioma. */
export function moduleCollection(locale: Lang): 'modules' | 'modulesEn' {
  return locale === 'en' ? 'modulesEn' : 'modules';
}
