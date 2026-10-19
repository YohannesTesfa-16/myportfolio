export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  headlineSubtitle?: string;
  description: string;
  challengeOutcome: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  architectureUrl?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

export interface TechItem {
  name: string;
  detail: string;
  level?: string;
  category: 'frontend' | 'backend' | 'databases' | 'deployment';
}

export interface TechCategory {
  id: string;
  code: string;
  title: string;
  tier: string;
  items: TechItem[];
}
