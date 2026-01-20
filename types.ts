
export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location?: string;
  description: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
  fullContent?: string;
}

export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  category: 'professional' | 'social' | 'event';
}
