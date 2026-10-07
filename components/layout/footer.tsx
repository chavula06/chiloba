import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#08090A]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-lg">
                M
              </div>
              <span className="text-xl font-bold text-white tracking-tight">MWABU.</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering students, inspiring audiences, and transforming careers through education, consulting, and ministry.
            </p>
            <div className="mt-4 flex gap-3">
              <Link href={SITE_CONFIG.social.twitter} aria-label="Twitter" className="text-gray-500 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href={SITE_CONFIG.social.linkedin} aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href={SITE_CONFIG.social.youtube} aria-label="YouTube" className="text-gray-500 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href={SITE_CONFIG.social.facebook} aria-label="Facebook" className="text-gray-500 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={SITE_CONFIG.social.instagram} aria-label="Instagram" className="text-gray-500 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Resources', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Mathematics Tuition</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Career Consultation</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">MC Services</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Music Ministry</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Radio Hosting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">{SITE_CONFIG.phone}</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-4 h-4" />
                <span>Sunday - Friday</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Chiloba Mwabu. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}