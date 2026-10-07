'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, MessageCircle, Play, Star, Users } from 'lucide-react';
import Link from 'next/link';
import { STATS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const TYPING_TEXTS = [
  'Mathematics Educator',
  'Grade 10–12 Specialist',
  'Tertiary Mathematics Tutor',
  'Career Consultant',
  'Professional MC',
  'Gospel Music Director',
  'Lukwanga FM Radio Host',
];

function TypingEffect() {
  const [currentText, setCurrentText] = React.useState(0);
  const [currentChar, setCurrentChar] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const text = TYPING_TEXTS[currentText];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentChar < text.length) {
          setCurrentChar((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentChar > 0) {
          setCurrentChar((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % TYPING_TEXTS.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentChar, isDeleting, currentText]);

  return (
    <div className="h-8 sm:h-10 flex items-center">
      <span className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
        {TYPING_TEXTS[currentText].substring(0, currentChar)}
      </span>
      <span className="animate-pulse text-blue-400 ml-1">|</span>
    </div>
  );
}

function FloatingFormula() {
  const formulas = ['∫', '∑', 'π', '∞', '√', 'Δ', 'θ', 'λ', 'α', 'β', 'γ', '∂'];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {formulas.map((formula, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl font-mono text-blue-500/10"
          initial={{ y: '100vh', x: `${Math.random() * 100}%`, rotate: Math.random() * 360 }}
          animate={{ y: '-10vh', rotate: Math.random() * 360 }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: 'loop',
            delay: Math.random() * 10,
          }}
        >
          {formula}
        </motion.div>
      ))}
    </div>
  );
}

function Particle() {
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  const duration = 3 + Math.random() * 4;
  const delay = Math.random() * 5;

  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-blue-400/30"
      style={{ left: `${startX}%`, top: `${startY}%` }}
      animate={{
        y: [-20, -100 - Math.random() * 200],
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-[#08090A] to-cyan-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.1)_0%,_transparent_50%)]" />

      <FloatingFormula />
      {Array.from({ length: 20 }).map((_, i) => (
        <Particle key={i} />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/50 px-4 py-1.5 text-sm text-gray-300 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Available for bookings and consultations
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Empowering Students.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Inspiring Audiences.
              </span>
              <br />
              Transforming Careers.
            </h1>

            <TypingEffect />

            <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Professional Mathematics Educator, Career Consultant, and Creative Professional dedicated to
              excellence in education, entertainment, and ministry.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="gradient" size="lg" asChild>
                <Link href="/bookings">
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resources">
                  <BookOpen className="h-5 w-5" />
                  Explore Resources
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href={`https://wa.me/${encodeURIComponent('+260977230272')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {STATS.map((stat) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl border border-gray-700/50 bg-gradient-to-br from-[#161B22] to-[#111827] overflow-hidden shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 mx-auto mb-4 flex items-center justify-center text-4xl sm:text-5xl font-bold text-white shadow-lg shadow-blue-600/30">
                      CM
                    </div>
                    <p className="text-white font-semibold">Chiloba Mwabu</p>
                    <p className="text-gray-400 text-sm mt-1">Professional Educator</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-[#161B22] border border-gray-700 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Star className="h-4 w-4 text-gold fill-gold" />
                <span className="text-xs font-medium text-white">5.0 Rating</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#161B22] border border-gray-700 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Users className="h-4 w-4 text-blue-400" />
                <span className="text-xs font-medium text-white">5,000+ Students</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}