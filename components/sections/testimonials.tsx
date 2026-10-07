import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { SAMPLE_TESTIMONIALS } from '@/lib/constants';
import type { Testimonial } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const testimonials = SAMPLE_TESTIMONIALS.filter((t) => t.approved);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What People Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from students, parents, schools, and organizations who have experienced
            the impact of working with Mr. Chiloba.
          </p>
        </div>

        {testimonials.length > 0 && (
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-gray-800 bg-[#161B22]">
              <CardContent className="space-y-6">
                <Quote className="h-8 w-8 text-blue-500" />
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {testimonials[current].name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonials[current].name}</div>
                    <div className="text-sm text-gray-400">{testimonials[current].role}</div>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonials[current].rating ? 'fill-gold text-gold' : 'text-gray-700'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? 'bg-blue-600' : 'bg-gray-700'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-gray-800 bg-[#161B22] h-full">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < t.rating ? 'fill-gold text-gold' : 'text-gray-700'}`} />
                  ))}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.type}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}