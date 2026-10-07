import { BookOpen, Briefcase, Building2, Church, FileText, GraduationCap, Mic, Music, Radio, School, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/shared/section-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Link from 'next/link';

const SERVICES = [
  {
    icon: BookOpen,
    title: 'Mathematics Education',
    description: 'Comprehensive mathematics tuition for Grade 10-12 and tertiary students. Covering algebra, calculus, statistics, and exam preparation.',
    features: ['One-on-one tutoring', 'Group sessions', 'Exam preparation', 'Homework help', 'Progress tracking'],
    popular: true,
    href: '/bookings',
  },
  {
    icon: Briefcase,
    title: 'Career Consultation',
    description: 'Professional career guidance and assessment. Help you discover your strengths and find the right career path.',
    features: ['Career assessment', 'University guidance', 'Resume building', 'Interview prep', 'Follow-up support'],
    popular: false,
    href: '/bookings',
  },
  {
    icon: Mic,
    title: 'Master of Ceremonies',
    description: 'Professional MC services for weddings, corporate events, conferences, and social gatherings.',
    features: ['Event hosting', 'Audience engagement', 'Program coordination', 'Sound management', 'Custom scripts'],
    popular: false,
    href: '/bookings',
  },
  {
    icon: Music,
    title: 'Music Ministry',
    description: 'Gospel music direction and ministry services for churches and religious events.',
    features: ['Music direction', 'Choir training', 'Song arrangement', 'Sound production', 'Worship leading'],
    popular: false,
    href: '/bookings',
  },
  {
    icon: Radio,
    title: 'Radio Hosting',
    description: 'Professional radio hosting and production services for Lukwanga FM and partner stations.',
    features: ['Show hosting', 'Content creation', 'Interview skills', 'Audio production', 'Audience engagement'],
    popular: false,
    href: '/bookings',
  },
  {
    icon: GraduationCap,
    title: 'Educational Workshops',
    description: 'Interactive workshops on mathematics, study skills, and career development for schools and organizations.',
    features: ['Custom curriculum', 'Interactive sessions', 'Materials provided', 'Certification', 'Follow-up resources'],
    popular: false,
    href: '/bookings',
  },
  {
    icon: School,
    title: 'School Seminars',
    description: 'Motivational and educational seminars for schools on mathematics, career guidance, and personal development.',
    features: ['Motivational talks', 'Study techniques', 'Career guidance', 'Exam tips', 'Q&A sessions'],
    popular: false,
    href: '/bookings',
  },
  {
    icon: FileText,
    title: 'Exam Preparation',
    description: 'Intensive exam preparation programs for Grade 10-12 and tertiary mathematics examinations.',
    features: ['Past paper practice', 'Marking scheme analysis', 'Time management', 'Exam techniques', 'Mock exams'],
    popular: false,
    href: '/bookings',
  },
  {
    icon: GraduationCap,
    title: 'University Guidance',
    description: 'Guidance on university selection, application processes, and scholarship opportunities.',
    features: ['University selection', 'Application support', 'Scholarship guidance', 'Personal statements', 'Interview prep'],
    popular: false,
    href: '/bookings',
  },
  {
    icon: Church,
    title: 'Church Programs',
    description: 'Comprehensive church program planning and execution including music ministry and event coordination.',
    features: ['Program planning', 'Music direction', 'Event coordination', 'Volunteer management', 'Worship design'],
    popular: false,
    href: '/bookings',
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    description: 'Professional event management and MC services for corporate functions and business conferences.',
    features: ['Event planning', 'Professional hosting', 'Audience engagement', 'Brand alignment', 'Post-event report'],
    popular: false,
    href: '/bookings',
  },
  {
    icon: BookOpen,
    title: 'Study Skills Workshop',
    description: 'Workshops on effective study techniques, time management, and learning strategies for students.',
    features: ['Study techniques', 'Time management', 'Note-taking', 'Memory methods', 'Exam strategies'],
    popular: false,
    href: '/bookings',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          description="Comprehensive professional services spanning education, consulting, entertainment, and ministry."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col h-full hover:shadow-glow transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-colors">
                    <service.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                        <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}