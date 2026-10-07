import { motion } from 'framer-motion';
import { Trophy, Star, Users, BookOpen, GraduationCap, Heart } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';

export function SuccessWall() {
  const achievements = [
    { icon: Trophy, label: 'Educator of the Year', year: '2025', color: 'text-gold' },
    { icon: Star, label: '5,000+ Students Taught', year: '2024', color: 'text-blue-400' },
    { icon: Users, label: '200+ Events Hosted', year: '2024', color: 'text-cyan-400' },
    { icon: BookOpen, label: '200+ Resources Created', year: '2025', color: 'text-emerald-400' },
    { icon: GraduationCap, label: 'University Admissions', year: '2025', color: 'text-purple-400' },
    { icon: Heart, label: 'Gospel Ministry', year: 'Ongoing', color: 'text-red-400' },
  ];

  return (
    <section id="success" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Achievement & Success Wall"
          description="Celebrating milestones, student success, and community impact."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-gray-800 bg-[#161B22] text-center">
                <CardContent className="p-6">
                  <item.icon className={`h-10 w-10 ${item.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold text-white mb-1">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.year}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}