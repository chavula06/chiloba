// Render home page sections
var TYPING_TEXTS = [
  'Mathematics Educator',
  'Grade 10–12 Specialist',
  'Tertiary Mathematics Tutor',
  'Career Consultant',
  'Professional MC',
  'Gospel Music Director',
  'Lukwanga FM Radio Host',
];

function renderHero() {
  return `
    <section class="hero" id="home">
      <div class="hero-bg"></div>
      <div class="hero-radial"></div>
      <div class="hero-radial-bottom"></div>
      <div class="hero-particles" id="heroParticles"></div>
      <div class="hero-formulas" id="heroFormulas"></div>
      <div class="hero-content">
        <div class="hero-grid">
          <div>
            <div class="hero-badge">
              <span class="hero-badge-dot"></span>
              Available for bookings and consultations
            </div>
            <h1 class="hero-title">
              Empowering Students.<br>
              <span class="gradient-text">Inspiring Audiences.</span><br>
              Transforming Careers.
            </h1>
            <div class="hero-typing">
              <span class="hero-typing-text" id="typingText"></span>
              <span class="hero-typing-cursor">|</span>
            </div>
            <p class="hero-desc">Professional Mathematics Educator, Career Consultant, and Creative Professional dedicated to excellence in education, entertainment, and ministry.</p>
            <div class="hero-buttons">
              <a href="bookings.html" class="btn btn-gradient">${ICONS.Calendar} Book Consultation</a>
              <a href="resources.html" class="btn btn-outline">${ICONS.BookOpen} Explore Resources</a>
              <a href="https://wa.me/260977230272" target="_blank" rel="noopener" class="btn btn-ghost">${ICONS.MessageCircle} WhatsApp</a>
            </div>
            <div class="hero-stats">
              ${STATS.map(s => `<div><div class="hero-stat-value">${s.value.toLocaleString()}${s.suffix}</div><div class="hero-stat-label">${s.label}</div></div>`).join('')}
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-card-wrapper">
              <div class="hero-card-glow"></div>
              <div class="hero-card">
                <div class="hero-card-inner">
                  <div class="hero-avatar">CM</div>
                  <p class="hero-card-name">Chiloba Mwabu</p>
                  <p class="hero-card-role">Professional Educator</p>
                </div>
                <div class="hero-card-bar"></div>
              </div>
              <div class="hero-float-badge top-right">${ICONS.Star} 5.0 Rating</div>
              <div class="hero-float-badge bottom-left">${ICONS.Users} 5,000+ Students</div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>Scroll</span>
        ${ICONS.ChevronDown}
      </div>
    </section>
  `;
}

function renderAbout() {
  const timeline = [
    { year: '2010', event: 'Began teaching mathematics at local schools' },
    { year: '2014', event: 'Launched career consulting practice' },
    { year: '2016', event: 'Started gospel music ministry' },
    { year: '2018', event: 'Joined Lukwanga FM as radio host' },
    { year: '2020', event: 'Launched online educational resources' },
    { year: '2023', event: 'Expanded to MC and corporate events' },
    { year: '2025', event: 'Building the ultimate learning platform' },
  ];
  const values = [
    { icon: ICONS.BookOpen, label: 'Excellence', description: 'We pursue the highest standards in everything we do.' },
    { icon: ICONS.Heart, label: 'Passion', description: 'We pour our hearts into every student and every project.' },
    { icon: ICONS.Users, label: 'Community', description: 'We believe in lifting others as we climb.' },
    { icon: ICONS.Target, label: 'Integrity', description: 'We are honest, transparent, and trustworthy.' },
    { icon: ICONS.Trophy, label: 'Innovation', description: 'We embrace new ideas and creative approaches.' },
    { icon: ICONS.Award, label: 'Impact', description: 'We measure success by the lives we transform.' },
  ];
  return `
    <section id="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About Chiloba Mwabu</h2>
          <p class="section-desc">A passionate educator, consultant, and creative professional dedicated to transforming lives through education, entertainment, and ministry.</p>
        </div>
        <div class="grid-2 mt-8" style="align-items: start; gap: 64px;">
          <div>
            <h3 style="font-size: 24px; font-weight: 700; color: #fff; margin-bottom: 16px;">Our Mission</h3>
            <p style="color: #9ca3af; margin-bottom: 32px; line-height: 1.7;">To empower students with mathematical knowledge, guide careers toward meaningful paths, and inspire audiences through creative excellence.</p>
            <h3 style="font-size: 24px; font-weight: 700; color: #fff; margin-bottom: 16px;">Our Vision</h3>
            <p style="color: #9ca3af; margin-bottom: 32px; line-height: 1.7;">A world where every student has access to quality education, every professional finds their calling, and every community is enriched by the arts.</p>
            <h3 style="font-size: 24px; font-weight: 700; color: #fff; margin-bottom: 16px;">Core Values</h3>
            <div class="grid-2" style="gap: 16px;">
              ${values.map(v => `
                <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; border-radius: 12px; background: #161B22; border: 1px solid #1f2937;">
                  <span style="color: #60a5fa; flex-shrink: 0;">${v.icon}</span>
                  <div>
                    <div style="font-size: 14px; font-weight: 600; color: #fff;">${v.label}</div>
                    <div style="font-size: 12px; color: #9ca3af; margin-top: 4px;">${v.description}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <div class="timeline">
              ${timeline.map(t => `
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-year">${t.year}</div>
                  <div class="timeline-text">${t.event}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="stats-grid" style="margin-top: 64px;">
          ${STATS.map(s => `<div class="stat-card"><div class="stat-value">${s.value.toLocaleString()}${s.suffix}</div><div class="stat-label">${s.label}</div></div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderServices() {
  return `
    <section id="services" style="background: rgba(17, 24, 39, 0.3);">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Services</h2>
          <p class="section-desc">Comprehensive professional services spanning education, consulting, entertainment, and ministry.</p>
        </div>
        <div class="grid-4" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
          ${SAMPLE_SERVICES.map(s => `
            <div class="card" style="display: flex; flex-direction: column;">
              <div style="padding: 24px 24px 0;">
                <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(59, 130, 246, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; color: #60a5fa;">
                  ${ICONS[s.icon] || ICONS.BookOpen}
                </div>
                <h3 class="card-title" style="font-size: 18px;">${s.title}</h3>
                <p class="card-text" style="margin-bottom: 12px;">${s.description}</p>
                <div style="font-size: 14px; color: #60a5fa; font-weight: 600; margin-bottom: 8px;">${s.price}</div>
              </div>
              <div style="padding: 0 24px 16px; flex: 1;">
                <ul class="feature-list">
                  ${s.features.slice(0, 4).map(f => `<li>${ICONS.Check} ${f}</li>`).join('')}
                </ul>
              </div>
              <div class="card-footer">
                <a href="bookings.html" class="btn btn-outline" style="width: 100%;">Book Now</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderResourceCenter() {
  return `
    <section id="resources">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Mathematics Resource Center</h2>
          <p class="section-desc">Your premium digital library for mathematics education. Search, filter, and download resources tailored to your learning needs.</p>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px;">
          <div style="position: relative; flex: 1; min-width: 240px;">
            <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #6b7280;">${ICONS.Search}</span>
            <input type="text" id="resourceSearch" class="form-input" placeholder="Search resources..." style="padding-left: 40px;" />
          </div>
          <button class="btn btn-primary" id="searchBtn">${ICONS.Search} Search</button>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px;">
          <select class="form-input" id="filterCategory" style="width: 180px;">
            <option value="all">All Categories</option>
            ${RESOURCE_CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('')}
          </select>
          <select class="form-input" id="filterGrade" style="width: 160px;">
            <option value="all">All Grades</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 12">Grade 12</option>
            <option value="Tertiary">Tertiary</option>
          </select>
          <select class="form-input" id="filterDifficulty" style="width: 160px;">
            <option value="all">All Levels</option>
            ${RESOURCE_DIFFICULTIES.map(d => `<option value="${d}">${d}</option>`).join('')}
          </select>
          <select class="form-input" id="sortBy" style="width: 160px;">
            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
            <option value="title">Title A-Z</option>
            <option value="difficulty">Difficulty</option>
          </select>
        </div>
        <div class="grid-4" id="resourceGrid" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));"></div>
        <div id="resourceEmpty" style="display: none; text-align: center; padding: 48px 0; color: #9ca3af;">
          <span style="color: #4b5563; display: block; margin-bottom: 16px;">${ICONS.FolderOpen}</span>
          <p>No resources found. Try adjusting your filters.</p>
        </div>
      </div>
    </section>
  `;
}

function renderTestimonials() {
  return `
    <section id="testimonials" style="background: rgba(17, 24, 39, 0.3);">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What People Say</h2>
          <p class="section-desc">Hear from students, parents, schools, and organizations who have experienced the impact of working with Mr. Chiloba.</p>
        </div>
        <div class="testimonial-slider">
          <div class="testimonial-card" id="testimonialCard"></div>
          <div class="testimonial-nav">
            <button class="btn btn-outline" id="testPrev" style="width: 40px; height: 40px; padding: 0;">${ICONS.ChevronLeft}</button>
            <div class="testimonial-dots" id="testDots"></div>
            <button class="btn btn-outline" id="testNext" style="width: 40px; height: 40px; padding: 0;">${ICONS.ChevronRight}</button>
          </div>
        </div>
        <div class="grid-3" id="testimonialGrid"></div>
      </div>
    </section>
  `;
}

function renderBookings() {
  return `
    <section id="bookings">
      <div class="container" style="max-width: 1024px;">
        <div class="section-header">
          <h2 class="section-title">Book a Session</h2>
          <p class="section-desc">Schedule a consultation, tuition session, or event booking with Mr. Chiloba.</p>
        </div>
        <div id="bookingsView" style="display: grid; grid-template-columns: 1fr 2fr; gap: 32px;">
          <div class="card" style="position: sticky; top: 96px; align-self: start;">
            <div style="padding: 24px; border-bottom: 1px solid #1f2937;">
              <h3 class="card-title" style="font-size: 18px;">Availability</h3>
              <p style="font-size: 13px; color: #9ca3af; margin-top: 4px;">Sunday - Friday, 8:00 AM - 6:00 PM CAT</p>
            </div>
            <div style="padding: 0 24px 16px;">
              ${DAYS_OF_WEEK.map(d => `
                <div class="availability-row">
                  <span style="font-size: 14px; color: #d1d5db;">${d}</span>
                  <span class="availability-status ${AVAILABILITY[d] === 'Available' ? 'availability-available' : 'availability-unavailable'}">${AVAILABILITY[d]}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="card">
            <div style="padding: 24px; border-bottom: 1px solid #1f2937;">
              <h3 class="card-title" style="font-size: 18px;">Booking Form</h3>
              <p style="font-size: 13px; color: #9ca3af; margin-top: 4px;">Fill in the details below to request a booking.</p>
            </div>
            <form id="bookingForm" style="padding: 24px;">
              <div class="grid-2" style="gap: 16px;">
                <div>
                  <label class="form-label" for="bf-name">Full Name *</label>
                  <input type="text" id="bf-name" name="name" class="form-input" placeholder="John Doe" required />
                  <div class="form-error" id="err-name"></div>
                </div>
                <div>
                  <label class="form-label" for="bf-email">Email *</label>
                  <input type="email" id="bf-email" name="email" class="form-input" placeholder="john@example.com" required />
                  <div class="form-error" id="err-email"></div>
                </div>
              </div>
              <div class="grid-2" style="gap: 16px; margin-top: 16px;">
                <div>
                  <label class="form-label" for="bf-phone">Phone *</label>
                  <input type="tel" id="bf-phone" name="phone" class="form-input" placeholder="+260 977 230 272" required />
                  <div class="form-error" id="err-phone"></div>
                </div>
                <div>
                  <label class="form-label" for="bf-service">Service *</label>
                  <select id="bf-service" name="service" class="form-input" required>
                    <option value="">Select a service</option>
                    ${BOOKING_SERVICES.map(s => `<option value="${s}">${s}</option>`).join('')}
                  </select>
                  <div class="form-error" id="err-service"></div>
                </div>
              </div>
              <div class="grid-2" style="gap: 16px; margin-top: 16px;">
                <div>
                  <label class="form-label" for="bf-date">Preferred Date *</label>
                  <input type="date" id="bf-date" name="date" class="form-input" required />
                  <div class="form-error" id="err-date"></div>
                </div>
                <div>
                  <label class="form-label" for="bf-time">Preferred Time *</label>
                  <input type="time" id="bf-time" name="time" class="form-input" required />
                  <div class="form-error" id="err-time"></div>
                </div>
              </div>
              <div style="margin-top: 16px;">
                <label class="form-label" for="bf-message">Message (Optional)</label>
                <textarea id="bf-message" name="message" class="form-textarea" placeholder="Tell us about your needs..." rows="4"></textarea>
              </div>
              <button type="submit" class="btn btn-gradient" style="width: 100%; margin-top: 24px;">${ICONS.Send} Submit Booking</button>
            </form>
          </div>
        </div>
        <div id="bookingsSuccess" style="display: none; text-align: center; max-width: 600px; margin: 0 auto; padding: 48px 0;">
          <div style="color: #10b981; margin-bottom: 16px;">${ICONS.CheckCircle}</div>
          <h2 class="section-title" style="font-size: 28px;">Booking Confirmed!</h2>
          <p class="section-desc" style="margin-bottom: 32px;">Thank you for your booking request. Mr. Chiloba will review your request and confirm within 24 hours.</p>
          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
            <a href="https://wa.me/260977230272" target="_blank" rel="noopener" class="btn btn-gradient">${ICONS.MessageCircle} WhatsApp Us</a>
            <a href="contact.html" class="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSuccessWall() {
  const items = [
    { icon: ICONS.Trophy, label: 'Educator of the Year', year: '2025', color: '#f59e0b' },
    { icon: ICONS.Star, label: '5,000+ Students Taught', year: '2024', color: '#60a5fa' },
    { icon: ICONS.Users, label: '200+ Events Hosted', year: '2024', color: '#22d3ee' },
    { icon: ICONS.BookOpen, label: '200+ Resources Created', year: '2025', color: '#10b981' },
    { icon: ICONS.GraduationCap, label: 'University Admissions', year: '2025', color: '#a78bfa' },
    { icon: ICONS.Heart, label: 'Gospel Ministry', year: 'Ongoing', color: '#f87171' },
  ];
  return `
    <section id="success" style="background: rgba(17, 24, 39, 0.3);">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Achievement & Success Wall</h2>
          <p class="section-desc">Celebrating milestones, student success, and community impact.</p>
        </div>
        <div class="grid-3">
          ${items.map(i => `
            <div class="card" style="text-align: center; padding: 32px 24px;">
              <div style="color: ${i.color}; display: flex; justify-content: center; margin-bottom: 16px;">${i.icon}</div>
              <h3 style="font-size: 18px; font-weight: 600; color: #fff; margin-bottom: 4px;">${i.label}</h3>
              <p style="font-size: 14px; color: #9ca3af;">${i.year}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ============ Home page render ============
function renderHomePage() {
  return renderHero() + renderAbout() + renderServices() + renderResourceCenter() + renderTestimonials() + renderSuccessWall() + renderBookings();
}
window.renderHomePage = renderHomePage;

// ============ About page ============
function renderAboutPage() {
  return `
    <section style="padding-top: 160px;">
      <div class="container">
        <div class="section-header">
          <h1 class="section-title">About Chiloba Mwabu</h1>
          <p class="section-desc">A passionate educator, consultant, and creative professional dedicated to transforming lives.</p>
        </div>
        ${renderAbout().replace(/<section id="about">/, '<div>').replace(/<\/section>$/, '</div>')}
      </div>
    </section>
  `;
}
window.renderAboutPage = renderAboutPage;

// ============ Services page ============
function renderServicesPage() {
  return `
    <section style="padding-top: 160px;">
      <div class="container">
        <div class="section-header">
          <h1 class="section-title">Our Services</h1>
          <p class="section-desc">Comprehensive professional services spanning education, consulting, entertainment, and ministry.</p>
        </div>
        <div class="grid-3" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
          ${SAMPLE_SERVICES.map(s => `
            <div class="card" style="display: flex; flex-direction: column;">
              <div style="padding: 24px;">
                <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(59, 130, 246, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; color: #60a5fa;">
                  ${ICONS[s.icon] || ICONS.BookOpen}
                </div>
                <span class="badge badge-blue" style="margin-bottom: 12px;">${s.category}</span>
                <h3 class="card-title" style="font-size: 20px; margin-top: 12px;">${s.title}</h3>
                <p class="card-text" style="margin-bottom: 12px;">${s.description}</p>
                <div style="font-size: 16px; color: #60a5fa; font-weight: 700; margin-bottom: 16px;">${s.price}</div>
                <ul class="feature-list">
                  ${s.features.map(f => `<li>${ICONS.Check} ${f}</li>`).join('')}
                </ul>
              </div>
              <div class="card-footer">
                <a href="bookings.html" class="btn btn-gradient" style="width: 100%;">Book ${s.title}</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
window.renderServicesPage = renderServicesPage;

// ============ Resources page ============
function renderResourcesPage() {
  return `
    <section style="padding-top: 160px;">
      <div class="container">
        <div class="section-header">
          <h1 class="section-title">Resource Center</h1>
          <p class="section-desc">Browse and download our complete collection of educational resources.</p>
        </div>
        ${renderResourceCenter().replace(/<section id="resources">/, '<div>').replace(/<\/section>$/, '</div>')}
      </div>
    </section>
  `;
}
window.renderResourcesPage = renderResourcesPage;

// ============ Gallery page ============
function renderGalleryPage() {
  const categories = [
    { key: 'all', label: 'All' },
    { key: 'teaching', label: 'Teaching' },
    { key: 'events', label: 'Events' },
    { key: 'church', label: 'Church' },
    { key: 'music', label: 'Music' },
    { key: 'radio', label: 'Radio' },
    { key: 'students', label: 'Students' },
    { key: 'awards', label: 'Awards' },
  ];
  return `
    <section style="padding-top: 160px;">
      <div class="container">
        <div class="section-header">
          <h1 class="section-title">Gallery</h1>
          <p class="section-desc">A glimpse into teaching, events, ministry, music, and radio work.</p>
        </div>
        <div class="tabs" style="justify-content: center;" id="galleryTabs">
          ${categories.map((c, i) => `<button class="tab ${i === 0 ? 'active' : ''}" data-cat="${c.key}">${c.label}</button>`).join('')}
        </div>
        <div class="gallery-grid" id="galleryGrid"></div>
      </div>
    </section>
    <div class="modal-overlay" id="lightbox">
      <div class="modal-content" style="max-width: 700px;">
        <div class="modal-header">
          <h3 class="modal-title" id="lightboxTitle"></h3>
          <button class="modal-close" id="lightboxClose">&times;</button>
        </div>
        <div class="modal-body">
          <div style="aspect-ratio: 16/9; background: linear-gradient(135deg, #1f2937, #111827); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; color: #4b5563;">
            ${ICONS.Image}
          </div>
          <p style="color: #9ca3af;" id="lightboxDesc"></p>
          <div style="display: flex; gap: 12px; margin-top: 16px; font-size: 14px; color: #9ca3af;">
            <span class="badge badge-blue" id="lightboxCat"></span>
            <span id="lightboxDate"></span>
          </div>
        </div>
      </div>
    </div>
  `;
}
window.renderGalleryPage = renderGalleryPage;

// ============ Testimonials page ============
function renderTestimonialsPage() {
  return `
    <section style="padding-top: 160px;">
      <div class="container">
        <div class="section-header">
          <h1 class="section-title">Testimonials</h1>
          <p class="section-desc">Read what students, parents, schools, and organizations say about working with Mr. Chiloba.</p>
        </div>
        ${renderTestimonials().replace(/<section id="testimonials"[^>]*>/, '<div>').replace(/<\/section>$/, '</div>')}
      </div>
    </section>
  `;
}
window.renderTestimonialsPage = renderTestimonialsPage;

// ============ Career Hub page ============
function renderCareerHubPage() {
  return `
    <section style="padding-top: 160px;">
      <div class="container" style="max-width: 1024px;">
        <div class="section-header">
          <h1 class="section-title">Career Assessment</h1>
          <p class="section-desc">Discover your strengths and find the right career path with our intelligent career assessment.</p>
        </div>
        <div id="careerView"></div>
      </div>
    </section>
  `;
}
window.renderCareerHubPage = renderCareerHubPage;

// ============ Bookings page ============
function renderBookingsPage() {
  return `
    <section style="padding-top: 160px;">
      <div class="container" style="max-width: 1024px;">
        ${renderBookings().replace(/<section id="bookings">/, '<div>').replace(/<\/section>$/, '</div>')}
      </div>
    </section>
  `;
}
window.renderBookingsPage = renderBookingsPage;

// ============ Contact page ============
function renderContactPage() {
  return `
    <section style="padding-top: 160px;">
      <div class="container">
        <div class="section-header">
          <h1 class="section-title">Contact Us</h1>
          <p class="section-desc">Get in touch for bookings, consultations, or just to say hello.</p>
        </div>
        <div id="contactView" style="display: grid; grid-template-columns: 1fr 2fr; gap: 32px;">
          <div>
            <div class="card" style="padding: 24px;">
              <h3 class="card-title" style="font-size: 18px; margin-bottom: 20px;">Contact Information</h3>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="color: #60a5fa;">${ICONS.Phone}</span>
                  <div>
                    <div style="font-size: 12px; color: #9ca3af;">Phone</div>
                    <a href="tel:${SITE_CONFIG.phone}" style="font-size: 14px; color: #fff;">${SITE_CONFIG.phone}</a>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="color: #60a5fa;">${ICONS.MessageCircle}</span>
                  <div>
                    <div style="font-size: 12px; color: #9ca3af;">WhatsApp</div>
                    <a href="https://wa.me/260977230272" target="_blank" rel="noopener" style="font-size: 14px; color: #fff;">${SITE_CONFIG.whatsapp}</a>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="color: #60a5fa;">${ICONS.Mail}</span>
                  <div>
                    <div style="font-size: 12px; color: #9ca3af;">Email</div>
                    <a href="mailto:${SITE_CONFIG.email}" style="font-size: 14px; color: #fff;">${SITE_CONFIG.email}</a>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="color: #60a5fa;">${ICONS.MapPin}</span>
                  <div>
                    <div style="font-size: 12px; color: #9ca3af;">Location</div>
                    <span style="font-size: 14px; color: #fff;">${SITE_CONFIG.address}</span>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="color: #60a5fa;">${ICONS.Clock}</span>
                  <div>
                    <div style="font-size: 12px; color: #9ca3af;">Availability</div>
                    <span style="font-size: 14px; color: #fff;">Sunday - Friday</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card" style="padding: 24px; margin-top: 24px;">
              <h3 class="card-title" style="font-size: 18px; margin-bottom: 16px;">Follow Us</h3>
              <div style="display: flex; gap: 12px;">
                <a href="${SITE_CONFIG.social.twitter}" style="color: #6b7280;">${ICONS.Twitter}</a>
                <a href="${SITE_CONFIG.social.linkedin}" style="color: #6b7280;">${ICONS.Linkedin}</a>
                <a href="${SITE_CONFIG.social.youtube}" style="color: #6b7280;">${ICONS.Youtube}</a>
                <a href="${SITE_CONFIG.social.facebook}" style="color: #6b7280;">${ICONS.Facebook}</a>
                <a href="${SITE_CONFIG.social.instagram}" style="color: #6b7280;">${ICONS.Instagram}</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div style="padding: 24px; border-bottom: 1px solid #1f2937;">
              <h3 class="card-title" style="font-size: 18px;">Send a Message</h3>
              <p style="font-size: 13px; color: #9ca3af; margin-top: 4px;">We will get back to you as soon as possible.</p>
            </div>
            <form id="contactForm" style="padding: 24px;">
              <div class="grid-2" style="gap: 16px;">
                <div>
                  <label class="form-label" for="cf-name">Full Name *</label>
                  <input type="text" id="cf-name" class="form-input" placeholder="John Doe" required />
                  <div class="form-error" id="cerr-name"></div>
                </div>
                <div>
                  <label class="form-label" for="cf-email">Email *</label>
                  <input type="email" id="cf-email" class="form-input" placeholder="john@example.com" required />
                  <div class="form-error" id="cerr-email"></div>
                </div>
              </div>
              <div style="margin-top: 16px;">
                <label class="form-label" for="cf-subject">Subject *</label>
                <input type="text" id="cf-subject" class="form-input" placeholder="What is this about?" required />
                <div class="form-error" id="cerr-subject"></div>
              </div>
              <div style="margin-top: 16px;">
                <label class="form-label" for="cf-message">Message *</label>
                <textarea id="cf-message" class="form-textarea" placeholder="Your message..." rows="5" required></textarea>
                <div class="form-error" id="cerr-message"></div>
              </div>
              <button type="submit" class="btn btn-gradient" style="width: 100%; margin-top: 24px;">${ICONS.Send} Send Message</button>
            </form>
          </div>
        </div>
        <div id="contactSuccess" style="display: none; text-align: center; max-width: 600px; margin: 0 auto; padding: 48px 0;">
          <div style="color: #10b981; margin-bottom: 16px;">${ICONS.CheckCircle}</div>
          <h2 class="section-title" style="font-size: 28px;">Message Sent!</h2>
          <p class="section-desc" style="margin-bottom: 32px;">Thank you for reaching out. We will get back to you within 24 hours.</p>
          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
            <a href="https://wa.me/260977230272" target="_blank" rel="noopener" class="btn btn-gradient">${ICONS.MessageCircle} WhatsApp Us</a>
            <button class="btn btn-outline" id="resetContactBtn">Send Another</button>
          </div>
        </div>
      </div>
    </section>
  `;
}
window.renderContactPage = renderContactPage;
