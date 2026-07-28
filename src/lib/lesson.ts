export type Lesson = {
  id: string;
  slug: string;
  module: string;
  title: string;
  level: 'Inicial' | 'Intermedio' | 'Avanzado';
  objectives: string[];
  prerequisites: string[];
  sections: ContentSection[];
  history?: LessonHistory;
  realWorldExamples: RealWorldExample[];
  hasInteractive: boolean;
  comparisons?: Comparison[];
  videos: VideoResource[];
  faqs: FAQ[];
  sources: Source[];
  status: 'borrador' | 'revisado' | 'publicado';
  lastReviewed: string;
};

export type LessonHistory = {
  introducedIn: string;
  context: string;
  evolution?: string;
};

export type RealWorldExample = {
  domain: string;
  description: string;
  code: string;
  result: string;
};

export type Comparison = {
  title: string;
  items: ComparisonItem[];
  recommendation: string;
};

export type ComparisonItem = {
  name: string;
  features: Record<string, string>;
};

export type ContentSection = {
  id: string;
  title: string;
  content: string;
};

export type VideoResource = {
  url: string;
  title: string;
  channel: string;
  duration?: string;
  summary: string;
};

export type Source = {
  title: string;
  url: string;
  date: string;
};

export type FAQ = {
  question: string;
  answer: string;
};
