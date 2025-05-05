export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}