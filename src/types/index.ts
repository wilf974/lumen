export interface User {
  id: string;
  name: string;
  level: UserLevel;
  lightPoints: number;
  badges: Badge[];
  currentStreak: number;
  joinDate: Date;
  avatar?: string;
}

export type UserLevel = 'Disciple' | 'Apôtre' | 'Évangéliste' | 'Lumière du monde';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedDate?: Date;
  category: BadgeCategory;
}

export type BadgeCategory = 'Semeur' | 'Passeur de Paix' | 'Témoignage vivant' | 'Lecteur assidu' | 'Évangélisateur';

export interface Quest {
  id: string;
  title: string;
  description: string;
  category: QuestCategory;
  steps: QuestStep[];
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  lightPointsReward: number;
  completed: boolean;
  progress: number;
}

export type QuestCategory = 'Béatitudes' | 'Paraboles' | 'Actes des Apôtres' | 'Évangiles' | 'Épîtres';

export interface QuestStep {
  id: string;
  type: 'lecture' | 'quiz' | 'méditation' | 'pratique';
  title: string;
  content: string;
  completed: boolean;
  questions?: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'community';
  lightPointsReward: number;
  deadline?: Date;
  completed: boolean;
  participantsCount: number;
}

export interface BibleVerse {
  id: string;
  book: string;
  chapter: number;
  verse: number;
  text: string;
  isFavorite: boolean;
}

export interface Post {
  id: string;
  author: User;
  type: 'testimony' | 'prayer' | 'verse' | 'challenge';
  content: string;
  imageUrl?: string;
  timestamp: Date;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: Date;
}

export interface Circle {
  id: string;
  name: string;
  description: string;
  members: User[];
  admin: User;
  type: 'famille' | 'église' | 'jeunes' | 'autre';
}
