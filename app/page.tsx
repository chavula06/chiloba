import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ServicesSection } from '@/components/sections/services';
import { ResourceCenter } from '@/components/sections/resource-center';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { BookingsSection } from '@/components/sections/bookings';
import { ContactPage } from '@/components/sections/contact-page';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResourceCenter />
      <TestimonialsSection />
      <BookingsSection />
    </>
  );
}