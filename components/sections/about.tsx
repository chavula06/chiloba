'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Target, Trophy, Users } from 'lucide-react';
import { STATS } from '@/lib/constants';
import { SectionHeader } from '@/components/shared/section-header';

const MISSION_STATEMENT = 'To empower students with mathematical knowledge, guide careers toward meaningful paths, and inspire audiences through creative excellence.';

const VISION_STATEMENT = 'A world where every student has access to quality education, every professional finds their calling, and every community is enriched by the arts.';

const CORE_VALUES = [
  { icon: BookOpen, label: 'Excellence', description: 'We pursue the highest standards in everything we do.' },
  { icon: Heart, label: 'Passion', description: 'We pour our hearts into every student and every project.' },
  { icon: Users, label: 'Community', description: 'We believe in lifting others as we climb.' },
  { icon: Target, label: 'Integrity', description: 'We are honest, transparent, and trustworthy.' },
  { icon: Trophy, label: 'Innovation', description: 'We embrace new ideas and creative approaches.' },
  { icon: Award, label: 'Impact', description: 'We measure success by the lives we transform.' },
];

const TIMELINE = [
  { year: '2010', event: 'Began teaching mathematics at local schools', icon: BookOpen },
  { year: '2014', event: 'Launched career consulting practice', icon: Target },
  { year: '2016', event: 'Started gospel music ministry', icon: Heart },
  { year: '2018', event: 'Joined Lukwanga FM as radio host', icon: Award },
  { year: '2020', event: 'Launched online educational resources', icon: BookOpen },
  { year: '2023', event: 'Expanded to MC and corporate events', icon: Users },
  { year: '2025', event: 'Building the ultimate learning platform', icon: Trophy },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Chiloba Mwabu"
          description="A passionate educator, consultant, and creative professional dedicated to transforming lives through education, entertainment, and ministry."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed mb-8">{MISSION_STATEMENT}</p>

            <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed mb-8">{VISION_STATEMENT}</p>

            <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
            <div className="grid grid-cols-2 gap-4">
              {CORE_VALUES.map((value) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#161B22] border border-gray-800"
                >
                  <value.icon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">{value.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{value.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500" />
              <div className="space-y-8 pl-12">
                {TIMELINE.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[2.15rem] top-1 w-8 h-8 rounded-full bg-[#161B22] border-2 border-blue-600 flex items-center justify-center">
                      <item.icon className="h-3 w-3 text-blue-400" />
                    </div>
                    <div className="text-sm font-semibold text-blue-400">{item.year}</div>
                    <div className="text-sm text-gray-300 mt-1">{item.event}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-[#161B22] border border-gray-800">
              <div className="text-3xl sm:text-4xl font-bold text-white">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}