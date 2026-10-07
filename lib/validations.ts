import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(9, 'Phone number must be at least 9 digits'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  message: z.string().optional(),
});

export const careerAssessmentSchema = z.object({
  answers: z.record(z.string(), z.number()),
});

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const resourceFilterSchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  grade: z.string().optional(),
  difficulty: z.string().optional(),
  premiumStatus: z.string().optional(),
  sortBy: z.string().optional(),
  page: z.number().min(1).optional(),
  limit: z.number().min(1).max(50).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;
export type CareerAssessmentData = z.infer<typeof careerAssessmentSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type ResourceFilterData = z.infer<typeof resourceFilterSchema>;