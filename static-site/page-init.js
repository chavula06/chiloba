// ============ Typing Effect ============
function initTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;
  const texts = TYPING_TEXTS;
  let ti = 0, ci = 0, deleting = false;
  function tick() {
    const text = texts[ti];
    if (!deleting) {
      if (ci < text.length) { ci++; el.textContent = text.substring(0, ci); setTimeout(tick, 100); }
      else { setTimeout(() => { deleting = true; tick(); }, 2000); }
    } else {
      if (ci > 0) { ci--; el.textContent = text.substring(0, ci); setTimeout(tick, 50); }
      else { deleting = false; ti = (ti + 1) % texts.length; tick(); }
    }
  }
  tick();
}

// ============ Hero particles and formulas ============
function initHeroAnimations() {
  const particles = document.getElementById('heroParticles');
  if (particles) {
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      const dur = 3 + Math.random() * 4;
      p.style.animationDuration = dur + 's';
      p.style.animationDelay = Math.random() * 5 + 's';
      particles.appendChild(p);
    }
  }
  const formulas = document.getElementById('heroFormulas');
  if (formulas) {
    const chars = ['∫', '∑', 'π', '∞', '√', 'Δ', 'θ', 'λ', 'α', 'β', 'γ', '∂'];
    for (let i = 0; i < 12; i++) {
      const f = document.createElement('div');
      f.className = 'formula';
      f.textContent = chars[Math.floor(Math.random() * chars.length)];
      f.style.left = Math.random() * 100 + '%';
      f.style.top = Math.random() * 100 + '%';
      f.style.fontSize = (16 + Math.random() * 24) + 'px';
      formulas.appendChild(f);
    }
  }
}

// ============ Resources ============
function initResources() {
  const grid = document.getElementById('resourceGrid');
  if (!grid) return;
  const search = document.getElementById('resourceSearch');
  const filterCat = document.getElementById('filterCategory');
  const filterGrade = document.getElementById('filterGrade');
  const filterDiff = document.getElementById('filterDifficulty');
  const sortBy = document.getElementById('sortBy');
  const empty = document.getElementById('resourceEmpty');
  const searchBtn = document.getElementById('searchBtn');

  function getFiltered() {
    let r = [...SAMPLE_RESOURCES];
    const q = (search?.value || '').toLowerCase().trim();
    if (q) {
      r = r.filter(x =>
        x.title.toLowerCase().includes(q) || x.description.toLowerCase().includes(q) ||
        x.subject.toLowerCase().includes(q) || x.topic.toLowerCase().includes(q) ||
        x.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    if (filterCat && filterCat.value !== 'all') r = r.filter(x => x.category === filterCat.value);
    if (filterGrade && filterGrade.value !== 'all') r = r.filter(x => x.grade === filterGrade.value);
    if (filterDiff && filterDiff.value !== 'all') r = r.filter(x => x.difficulty === filterDiff.value);
    switch (sortBy?.value) {
      case 'newest': r.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)); break;
      case 'popular': r.sort((a, b) => b.downloads - a.downloads); break;
      case 'title': r.sort((a, b) => a.title.localeCompare(b.title)); break;
      case 'difficulty': {
        const order = { Beginner: 1, Intermediate: 2, Advanced: 3, Expert: 4 };
        r.sort((a, b) => order[a.difficulty] - order[b.difficulty]);
        break;
      }
    }
    return r;
  }

  function render() {
    const r = getFiltered();
    grid.innerHTML = r.map(x => `
      <div class="card resource-card">
        <div class="resource-card-image">
          <span class="card-image-icon" style="width: 48px; height: 48px;">${ICONS.BookOpen}</span>
          <span class="badge ${x.premiumStatus === 'premium' ? 'badge-premium' : 'badge-free'}" style="position: absolute; top: 8px; left: 8px;">${x.premiumStatus === 'premium' ? 'Premium' : 'Free'}</span>
          ${x.premiumStatus === 'premium' ? `<span class="badge badge-premium" style="position: absolute; top: 8px; right: 8px;">${ICONS.Lock} Premium</span>` : ''}
        </div>
        <div class="resource-card-body">
          <h3 class="card-title" style="font-size: 15px; line-height: 1.4;">${x.title}</h3>
          <p class="card-text" style="font-size: 13px; margin: 8px 0;">${x.description}</p>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
            <span class="badge badge-gray" style="font-size: 11px;">${x.category}</span>
            <span class="badge badge-blue" style="font-size: 11px;">${x.difficulty}</span>
          </div>
          <div style="display: flex; gap: 12px; font-size: 12px; color: #9ca3af; margin-top: 8px;">
            <span style="display: inline-flex; align-items: center; gap: 4px;">${ICONS.Clock} ${x.estimatedStudyTime}</span>
            <span style="display: inline-flex; align-items: center; gap: 4px;">${ICONS.Download} ${x.downloads.toLocaleString()}</span>
          </div>
        </div>
        <div class="resource-card-footer">
          <button class="btn btn-outline" style="flex: 1; padding: 8px 12px; font-size: 13px;" data-save="${x.id}">${ICONS.Bookmark} Save</button>
          ${x.premiumStatus === 'premium'
            ? `<a href="bookings.html" class="btn btn-gradient" style="flex: 1; padding: 8px 12px; font-size: 13px;">Unlock</a>`
            : `<a href="${x.url}" class="btn btn-gradient" style="flex: 1; padding: 8px 12px; font-size: 13px;">${ICONS.Download} Download</a>`
          }
        </div>
      </div>
    `).join('');
    if (empty) empty.style.display = r.length === 0 ? 'block' : 'none';
    grid.querySelectorAll('[data-save]').forEach(btn => {
      btn.onclick = () => { showToast('Resource saved to your bookmarks'); };
    });
  }

  [search, filterCat, filterGrade, filterDiff, sortBy].forEach(el => {
    if (!el) return;
    el.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', render);
  });
  if (searchBtn) searchBtn.onclick = render;
  render();
}

// ============ Testimonials ============
function initTestimonials() {
  const tCard = document.getElementById('testimonialCard');
  if (!tCard) return;
  const list = SAMPLE_TESTIMONIALS.filter(t => t.approved);
  let current = 0;
  const dots = document.getElementById('testDots');
  const prev = document.getElementById('testPrev');
  const next = document.getElementById('testNext');
  const grid = document.getElementById('testimonialGrid');

  function getInitials(name) { return name.split(' ').map(n => n[0]).join('').substring(0, 2); }

  function renderCard() {
    const t = list[current];
    tCard.innerHTML = `
      <div style="color: #60a5fa; margin-bottom: 16px; display: flex; justify-content: center;">${ICONS.Quote}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${getInitials(t.name)}</div>
        <div style="text-align: left;">
          <div style="font-weight: 600; color: #fff;">${t.name}</div>
          <div style="font-size: 13px; color: #9ca3af;">${t.role}${t.company ? ' • ' + t.company : ''}</div>
          <div style="display: flex; gap: 2px; margin-top: 4px; color: #f59e0b;">${Array(5).fill().map((_, i) => `<span style="color: ${i < t.rating ? '#f59e0b' : '#374151'};">${ICONS.Star}</span>`).join('')}</div>
        </div>
      </div>
    `;
    if (dots) {
      dots.innerHTML = list.map((_, i) => `<button class="testimonial-dot ${i === current ? 'active' : ''}" data-i="${i}"></button>`).join('');
      dots.querySelectorAll('.testimonial-dot').forEach(d => {
        d.onclick = () => { current = parseInt(d.dataset.i); renderCard(); };
      });
    }
  }
  if (prev) prev.onclick = () => { current = (current - 1 + list.length) % list.length; renderCard(); };
  if (next) next.onclick = () => { current = (current + 1) % list.length; renderCard(); };
  renderCard();
  if (grid) {
    grid.innerHTML = list.slice(0, 6).map(t => `
      <div class="card" style="padding: 24px;">
        <div style="display: flex; gap: 2px; margin-bottom: 12px; color: #f59e0b;">${Array(5).fill().map((_, i) => `<span style="color: ${i < t.rating ? '#f59e0b' : '#374151'}; width: 16px; height: 16px;">${ICONS.Star}</span>`).join('')}</div>
        <p style="font-size: 14px; color: #d1d5db; line-height: 1.6; font-style: italic;">"${t.text}"</p>
        <div style="display: flex; align-items: center; gap: 12px; margin-top: 16px;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #2563eb, #06b6d4); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 14px;">${getInitials(t.name)}</div>
          <div>
            <div style="font-size: 14px; font-weight: 600; color: #fff;">${t.name}</div>
            <div style="font-size: 12px; color: #9ca3af;">${t.type}</div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// ============ Gallery ============
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const tabs = document.getElementById('galleryTabs');
  const lightbox = document.getElementById('lightbox');
  const lbTitle = document.getElementById('lightboxTitle');
  const lbDesc = document.getElementById('lightboxDesc');
  const lbCat = document.getElementById('lightboxCat');
  const lbDate = document.getElementById('lightboxDate');
  const lbClose = document.getElementById('lightboxClose');
  let active = 'all';

  function render() {
    const items = active === 'all' ? SAMPLE_GALLERY : SAMPLE_GALLERY.filter(g => g.category === active);
    grid.innerHTML = items.map(g => `
      <div class="gallery-item" data-id="${g.id}">
        <span class="gallery-item-icon" style="width: 48px; height: 48px;">${g.category === 'music' ? ICONS.Music : (g.category === 'radio' ? ICONS.Radio : ICONS.Image)}</span>
        <span class="badge badge-gray" style="position: absolute; top: 8px; left: 8px;">${g.category}</span>
        <div class="gallery-overlay">
          <div>
            <div class="gallery-title">${g.title}</div>
            <div class="gallery-desc">${g.description}</div>
          </div>
        </div>
      </div>
    `).join('');
    grid.querySelectorAll('.gallery-item').forEach(el => {
      el.onclick = () => {
        const g = SAMPLE_GALLERY.find(x => x.id === el.dataset.id);
        if (!g) return;
        lbTitle.textContent = g.title;
        lbDesc.textContent = g.description;
        lbCat.textContent = g.category;
        lbDate.textContent = g.date;
        lightbox.classList.add('open');
      };
    });
  }
  if (tabs) {
    tabs.querySelectorAll('.tab').forEach(t => {
      t.onclick = () => {
        tabs.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        active = t.dataset.cat;
        render();
      };
    });
  }
  if (lbClose) lbClose.onclick = () => lightbox.classList.remove('open');
  if (lightbox) lightbox.onclick = (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); };
  render();
}

// ============ Career Hub ============
function initCareer() {
  const view = document.getElementById('careerView');
  if (!view) return;
  let current = 0;
  const answers = {};
  const total = CAREER_QUESTIONS.length;

  function renderQuestion() {
    if (current >= total) { return renderResult(); }
    const q = CAREER_QUESTIONS[current];
    const progress = (current / total) * 100;
    view.innerHTML = `
      <div class="card">
        <div style="padding: 24px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px;">
            <span style="color: #9ca3af;">Question ${current + 1} of ${total}</span>
            <span style="color: #60a5fa; font-weight: 600;">${Math.round(progress)}% Complete</span>
          </div>
          <div class="progress-bar"><div class="progress-fill" style="width: ${progress}%;"></div></div>
        </div>
        <div style="padding: 0 24px 24px;">
          <h3 style="font-size: 22px; font-weight: 600; color: #fff; margin-bottom: 24px;">${q.question}</h3>
          <div class="grid-2" style="gap: 12px;">
            ${q.options.map((o, i) => `
              <button class="option-btn" data-val="${o.value}">
                <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                <span>${o.label}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    view.querySelectorAll('.option-btn').forEach(b => {
      b.onclick = () => {
        answers[q.id] = parseInt(b.dataset.val);
        current++;
        renderQuestion();
      };
    });
  }

  function renderResult() {
    const sorted = [...CAREER_RECOMMENDATIONS].sort((a, b) => b.score - a.score);
    const r = sorted[0];
    view.innerHTML = `
      <div class="card" style="overflow: hidden; margin-bottom: 24px;">
        <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(6, 182, 212, 0.2)); padding: 24px;">
          <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
            <div style="width: 56px; height: 56px; border-radius: 12px; background: rgba(37, 99, 235, 0.2); display: flex; align-items: center; justify-content: center; color: #60a5fa;">${ICONS.Rocket}</div>
            <div>
              <h3 style="font-size: 24px; font-weight: 700; color: #fff;">${r.career}</h3>
              <p style="font-size: 14px; color: #9ca3af;">Match Score: ${r.score}%</p>
            </div>
          </div>
        </div>
        <div style="padding: 24px;">
          <p style="color: #d1d5db; line-height: 1.7; margin-bottom: 24px;">${r.description}</p>
          <h4 style="font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;"><span style="color: #60a5fa;">${ICONS.GraduationCap}</span> Recommended University Courses</h4>
          <ul style="list-style: none; margin-bottom: 24px;">
            ${r.universityCourses.map(c => `<li style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: #9ca3af; margin-bottom: 8px;"><span style="color: #60a5fa;">${ICONS.Star}</span> ${c}</li>`).join('')}
          </ul>
          <h4 style="font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;"><span style="color: #22d3ee;">${ICONS.BookOpen}</span> Recommended Resources</h4>
          <ul style="list-style: none; margin-bottom: 24px;">
            ${r.recommendedResources.map(x => `<li style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: #9ca3af; margin-bottom: 8px;"><span style="color: #22d3ee;">${ICONS.Download}</span> ${x}</li>`).join('')}
          </ul>
          <h4 style="font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;"><span style="color: #f59e0b;">${ICONS.Target}</span> Professional Advice</h4>
          <p style="font-size: 14px; color: #9ca3af; line-height: 1.7;">${r.professionalAdvice}</p>
          <div style="display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap;">
            <a href="https://wa.me/260977230272" target="_blank" rel="noopener" class="btn btn-gradient" style="flex: 1; min-width: 200px;">Discuss with Chiloba</a>
            <button class="btn btn-outline" id="retakeBtn" style="flex: 1; min-width: 200px;">Retake Assessment</button>
          </div>
        </div>
      </div>
      <div class="alert alert-success">
        <p style="font-size: 14px;"><strong>Note:</strong> This assessment provides general guidance. For personalized career counseling, book a consultation with Mr. Chiloba.</p>
      </div>
    `;
    document.getElementById('retakeBtn').onclick = () => { current = 0; for (const k in answers) delete answers[k]; renderQuestion(); };
  }
  renderQuestion();
}

// ============ Booking Form ============
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;
  form.onsubmit = (e) => {
    e.preventDefault();
    const errs = {};
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || data.name.length < 2) errs.name = 'Name must be at least 2 characters';
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Invalid email address';
    if (!data.phone || data.phone.replace(/\D/g, '').length < 9) errs.phone = 'Phone number must be at least 9 digits';
    if (!data.service) errs.service = 'Please select a service';
    if (!data.date) errs.date = 'Please select a date';
    if (!data.time) errs.time = 'Please select a time';
    for (const k of Object.keys(errs)) {
      const el = document.getElementById('err-' + k);
      if (el) el.textContent = errs[k];
      const f = form.querySelector(`[name="${k}"]`);
      if (f) f.classList.add('error');
    }
    for (const k of Object.keys(data)) {
      if (!errs[k]) {
        const el = document.getElementById('err-' + k);
        if (el) el.textContent = '';
        const f = form.querySelector(`[name="${k}"]`);
        if (f) f.classList.remove('error');
      }
    }
    if (Object.keys(errs).length === 0) {
      form.querySelector('button[type="submit"]').disabled = true;
      fetch('/api/bookings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then((r) => r.json())
        .then((res) => {
          document.getElementById('bookingsView').style.display = 'none';
          document.getElementById('bookingsSuccess').style.display = 'block';
          showToast(res.message);
        })
        .catch((e) => { showToast(e.message || 'Something went wrong. Please try again.', 'error'); form.querySelector('button[type="submit"]').disabled = false; })
        .finally(() => form.reset());
    }
  };
}

// ============ Contact Form ============
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.onsubmit = (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('cf-name').value.trim(),
      email: document.getElementById('cf-email').value.trim(),
      subject: document.getElementById('cf-subject').value.trim(),
      message: document.getElementById('cf-message').value.trim(),
    };
    const errs = {};
    if (data.name.length < 2) errs.name = 'Name must be at least 2 characters';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Invalid email address';
    if (data.subject.length < 2) errs.subject = 'Subject must be at least 2 characters';
    if (data.message.length < 10) errs.message = 'Message must be at least 10 characters';
    const fields = { name: 'cf-name', email: 'cf-email', subject: 'cf-subject', message: 'cf-message' };
    for (const k of Object.keys(fields)) {
      const el = document.getElementById('cerr-' + k);
      if (el) el.textContent = errs[k] || '';
      const f = document.getElementById(fields[k]);
      if (f) f.classList.toggle('error', !!errs[k]);
    }
    if (Object.keys(errs).length === 0) {
      form.querySelector('button[type="submit"]').disabled = true;
      fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then((r) => r.json())
        .then((res) => {
          document.getElementById('contactView').style.display = 'none';
          document.getElementById('contactSuccess').style.display = 'block';
          showToast(res.message);
        })
        .catch((e) => { showToast(e.message || 'Something went wrong. Please try again.', 'error'); form.querySelector('button[type="submit"]').disabled = false; })
        .finally(() => form.reset());
    }
  };
  const resetBtn = document.getElementById('resetContactBtn');
  if (resetBtn) resetBtn.onclick = () => {
    document.getElementById('contactSuccess').style.display = 'none';
    document.getElementById('contactView').style.display = 'grid';
  };
}

// Init everything relevant
document.addEventListener('DOMContentLoaded', () => {
  initTyping();
  initHeroAnimations();
  initResources();
  initTestimonials();
  initGallery();
  initCareer();
  initBookingForm();
  initContactForm();
});
