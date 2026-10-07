'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { SITE_CONFIG } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/toast';

export function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('Contact form submitted:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      reset();
      toast.success('Message sent! We will get back to you within 24 hours.');
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="w-16 h-16 rounded-full bg-emerald-600/20 flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
            <p className="text-gray-400 mb-6">
              Thank you for reaching out. We will get back to you within 24 hours.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="gradient" asChild>
                <a href={`https://wa.me/${encodeURIComponent('+260977230272')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Send Another Message</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch for bookings, consultations, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-gray-800 bg-[#161B22]">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm text-white hover:text-blue-400 transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">WhatsApp</div>
                    <a href={`https://wa.me/${encodeURIComponent('+260977230272')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-blue-400 transition-colors">
                      {SITE_CONFIG.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-white hover:text-blue-400 transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <span className="text-sm text-white">{SITE_CONFIG.address}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Availability</div>
                    <span className="text-sm text-white">Sunday - Friday</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-[#161B22]">
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <a href={SITE_CONFIG.social.twitter} aria-label="Twitter" className="text-gray-500 hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={SITE_CONFIG.social.linkedin} aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={SITE_CONFIG.social.youtube} aria-label="YouTube" className="text-gray-500 hover:text-white transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href={SITE_CONFIG.social.facebook} aria-label="Facebook" className="text-gray-500 hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={SITE_CONFIG.social.instagram} aria-label="Instagram" className="text-gray-500 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-gray-800 bg-[#161B22]">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>We will get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Full Name</Label>
                      <Input id="contact-name" placeholder="John Doe" {...register('name')} />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="john@example.com" {...register('email')} />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this about?" {...register('subject')} />
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={5} {...register('message')} />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" variant="gradient" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : (
                      <><Send className="h-4 w-4" /> Send Message</>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}