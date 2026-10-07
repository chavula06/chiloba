export type ResourceCategory = 'Grade 10' | 'Grade 11' | 'Grade 12' | 'Tertiary' | 'Career Resources' | 'Study Guides' | 'Revision Packs' | 'Formula Sheets' | 'Past Papers' | 'Marking Schemes';

export type ResourceDifficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type ResourceType = 'PDF' | 'DOCX' | 'ZIP' | 'VIDEO' | 'IMAGE' | 'AUDIO';

export type ResourcePremiumStatus = 'free' | 'premium';

export interface Resource {
  id: string;
  title: string;
  description: string;
  subject: string;
  topic: string;
  category: ResourceCategory;
  grade: string;
  type: ResourceType;
  fileSize: string;
  downloads: number;
  uploadDate: string;
  premiumStatus: ResourcePremiumStatus;
  difficulty: ResourceDifficulty;
  estimatedStudyTime: string;
  thumbnail: string;
  url: string;
  tags: string[];
  bookmarked: boolean;
  favorited: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
  approved: boolean;
  featured: boolean;
  type: 'student' | 'parent' | 'school' | 'church' | 'organization';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  price: string;
  features: string[];
  popular: boolean;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
  status: 'pending' | 'approved' | 'rejected' | 'rescheduled';
  createdAt: string;
}

export interface CareerQuestion {
  id: string;
  question: string;
  options: { label: string; value: number }[];
}

export interface CareerAssessmentResult {
  career: string;
  description: string;
  universityCourses: string[];
  recommendedResources: string[];
  professionalAdvice: string;
  score: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'teaching' | 'events' | 'church' | 'music' | 'radio' | 'students' | 'awards' | 'photos' | 'videos';
  url: string;
  thumbnail: string;
  description: string;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  social: {
    twitter: string;
    linkedin: string;
    youtube: string;
    facebook: string;
    instagram: string;
  };
}

export interface DashboardStats {
  registeredUsers: number;
  downloads: number;
  premiumSales: number;
  pendingUnlockRequests: number;
  revenue: number;
  resourcesUploaded: number;
  bookings: number;
  messages: number;
  testimonials: number;
}

export interface UnlockRequest {
  id: string;
  studentName: string;
  studentEmail: string;
  resourceId: string;
  resourceTitle: string;
  date: string;
  paymentStatus: 'pending' | 'verified' | 'rejected';
  notes: string;
}