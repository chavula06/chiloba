'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingFormSchema, type BookingFormData } from '@/lib/validations';
import { BOOKING_SERVICES, DAYS_OF_WEEK, AVAILABILITY } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/toast';

export function BookingsSection() {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      console.log('Booking submitted:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      reset();
      toast.success('Booking request submitted! We will confirm within 24 hours.');
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <section id="bookings" className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Booking Confirmed!</h2>
            <p className="text-gray-400 mb-6">
              Thank you for your booking request. Mr. Chiloba will review your request and confirm within 24 hours.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="gradient" asChild>
                <a href={`https://wa.me/${encodeURIComponent('+260977230272')}`} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="bookings" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Book a Session</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Schedule a consultation, tuition session, or event booking with Mr. Chiloba.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="border-gray-800 bg-[#161B22] sticky top-24">
              <CardHeader>
                <CardTitle>Availability</CardTitle>
                <CardDescription>Sunday - Friday, 8:00 AM - 6:00 PM CAT</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {DAYS_OF_WEEK.map((day) => (
                  <div key={day} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                    <span className="text-sm text-gray-300">{day}</span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      AVAILABILITY[day] === 'Available'
                        ? 'bg-emerald-600/20 text-emerald-400'
                        : 'bg-red-600/20 text-red-400'
                    }`}>
                      {AVAILABILITY[day]}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-gray-800 bg-[#161B22]">
              <CardHeader>
                <CardTitle>Booking Form</CardTitle>
                <CardDescription>Fill in the details below to request a booking.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" {...register('name')} />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" {...register('email')} />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+260 977 230 272" {...register('phone')} />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="service">Service</Label>
                      <Select onValueChange={(v) => register('service').onChange({ target: { value: v } })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {BOOKING_SERVICES.map((svc) => (
                            <SelectItem key={svc} value={svc}>{svc}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" {...register('date')} />
                      {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Input id="time" type="time" {...register('time')} />
                      {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time.message}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea id="message" placeholder="Tell us about your needs..." rows={4} {...register('message')} />
                  </div>

                  <Button type="submit" variant="gradient" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : (
                      <><Send className="h-4 w-4" /> Submit Booking</>
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