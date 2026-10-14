/* ==========================================================================
   KING'S TRAVELS AND TOURISM - CORE INTERACTION CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCurrencySelector();
  initAnimatedCounters();
  initScrollToTop();
  initModals();
  initNewsletter();
  
  // Page specific initializations
  if (document.getElementById('destinations-grid')) {
    initDestinationsPage();
  }
  if (document.getElementById('packages-grid')) {
    initPackagesPage();
  }
  if (document.getElementById('booking-wizard-form')) {
    initBookingWizard();
  }
  if (document.getElementById('contact-journey-form')) {
    initContactForm();
  }
  if (document.querySelector('.faq-accordion')) {
    initFaqAccordion();
  }
});

/* ==========================================================================
   1. NAVIGATION & SCROLL
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.royal-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileOverlay = document.querySelector('.mobile-backdrop-overlay');
  const mobileClose = document.querySelector('.mobile-drawer-close');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile Drawer Toggle
  function openMobileMenu() {
    mobileDrawer?.classList.add('open');
    mobileOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer?.classList.remove('open');
    mobileOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openMobileMenu);
  mobileClose?.addEventListener('click', closeMobileMenu);
  mobileOverlay?.addEventListener('click', closeMobileMenu);
}

/* ==========================================================================
   2. CURRENCY SELECTOR & LIVE CONVERTER
   ========================================================================== */
let currentCurrency = localStorage.getItem('kings_currency') || 'USD';

function initCurrencySelector() {
  const selectors = document.querySelectorAll('.currency-select');
  selectors.forEach(sel => {
    sel.value = currentCurrency;
    sel.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      localStorage.setItem('kings_currency', currentCurrency);
      selectors.forEach(s => s.value = currentCurrency);
      updateAllPricesOnPage();
      showToast(`Currency updated to ${KINGS_DATA.currencies[currentCurrency].name}`);
    });
  });
  updateAllPricesOnPage();
}

function formatPrice(amountUSD) {
  const curr = KINGS_DATA.currencies[currentCurrency] || KINGS_DATA.currencies.USD;
  const converted = Math.round(amountUSD * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

function updateAllPricesOnPage() {
  // Elements with data-price-usd attribute
  document.querySelectorAll('[data-price-usd]').forEach(el => {
    const usd = parseFloat(el.getAttribute('data-price-usd'));
    if (!isNaN(usd)) {
      el.textContent = formatPrice(usd);
    }
  });

  // If booking engine is active, trigger price calculation
  if (typeof calculateBookingTotal === 'function') {
    calculateBookingTotal();
  }
}

/* ==========================================================================
   3. ANIMATED COUNTERS (Viewport Observer)
   ========================================================================== */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        let count = 0;
        const duration = 2000;
        const stepTime = 25;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            el.textContent = target.toLocaleString() + suffix;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(count).toLocaleString() + suffix;
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => observer.observe(counter));
}

/* ==========================================================================
   4. SCROLL TO TOP BUTTON
   ========================================================================== */
function initScrollToTop() {
  const btn = document.querySelector('.scroll-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   5. TOAST NOTIFICATION
   ========================================================================== */
function showToast(message, type = 'gold') {
  let container = document.querySelector('.royal-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'royal-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'royal-toast';
  toast.innerHTML = `<span>👑</span> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-30px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   6. GLOBAL MODALS (Details / Itinerary / Inquiries)
   ========================================================================== */
function initModals() {
  const modalBackdrop = document.querySelector('.royal-modal-backdrop');
  const closeBtns = document.querySelectorAll('.modal-close-btn');

  function closeModal() {
    modalBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
}

function openRoyalModal(title, htmlContent) {
  let modalBackdrop = document.querySelector('.royal-modal-backdrop');
  if (!modalBackdrop) {
    modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'royal-modal-backdrop';
    modalBackdrop.innerHTML = `
      <div class="royal-modal-content">
        <div class="royal-modal-header">
          <h3 class="modal-dynamic-title">Royal Experience Details</h3>
          <button class="modal-close-btn" aria-label="Close Modal">✕</button>
        </div>
        <div class="modal-dynamic-body"></div>
      </div>
    `;
    document.body.appendChild(modalBackdrop);
    initModals();
  }

  const modalTitle = modalBackdrop.querySelector('.modal-dynamic-title');
  const modalBody = modalBackdrop.querySelector('.modal-dynamic-body');

  if (modalTitle) modalTitle.textContent = title;
  if (modalBody) modalBody.innerHTML = htmlContent;

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   7. DESTINATIONS PAGE LOGIC (Filters + Modal Detail)
   ========================================================================== */
function initDestinationsPage() {
  const container = document.getElementById('destinations-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('dest-search-input');

  function renderDestinations(category = 'all', searchQuery = '') {
    if (!container) return;
    
    let filtered = KINGS_DATA.destinations;

    if (category !== 'all') {
      filtered = filtered.filter(d => d.category.includes(category.toLowerCase()));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(q) || 
        d.country.toLowerCase().includes(q) ||
        d.shortDesc.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <h3 style="font-family: var(--font-royal); color: var(--gold-light); margin-bottom: 10px;">No Royal Destinations Found</h3>
          <p style="color: var(--text-muted);">Try adjusting your category filter or search keywords.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(d => `
      <div class="destination-card" data-id="${d.id}">
        <div class="dest-img-wrap">
          <img src="${d.image}" alt="${d.name}" class="dest-img" loading="lazy" />
          <div class="dest-badge">${d.badge}</div>
          <div class="dest-overlay">
            <div class="dest-country">${d.country}</div>
            <h3 class="dest-name">${d.name}</h3>
            <p class="dest-desc">${d.shortDesc}</p>
            <div class="dest-footer">
              <div class="dest-price-wrap">
                <span class="dest-price-label">Starting From</span>
                <span class="dest-price" data-price-usd="${d.priceUSD}">${formatPrice(d.priceUSD)}</span>
              </div>
              <button class="btn-royal btn-sm" onclick="showDestinationModal('${d.id}')">
                Explore <span>✦</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'all';
      renderDestinations(cat, searchInput ? searchInput.value : '');
    });
  });

  // Search input handler
  searchInput?.addEventListener('input', (e) => {
    const activeBtn = document.querySelector('.filter-btn.active');
    const cat = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    renderDestinations(cat, e.target.value);
  });

  // Initial render
  renderDestinations();
}

// Global modal trigger for destination details
window.showDestinationModal = function(id) {
  const dest = KINGS_DATA.destinations.find(d => d.id === id);
  if (!dest) return;

  const content = `
    <div style="margin-bottom: 24px; border-radius: var(--radius-md); overflow: hidden; max-height: 320px;">
      <img src="${dest.image}" alt="${dest.name}" style="width: 100%; height: 100%; object-fit: cover;" />
    </div>
    <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 20px;">
      <div style="background: rgba(255,255,255,0.06); padding: 8px 16px; border-radius: var(--radius-sm); border: 1px solid var(--gold-border);">
        <strong style="color: var(--gold-light); display: block; font-size: 0.75rem; text-transform: uppercase;">Best Season</strong>
        <span style="font-size: 0.88rem;">${dest.bestSeason}</span>
      </div>
      <div style="background: rgba(255,255,255,0.06); padding: 8px 16px; border-radius: var(--radius-sm); border: 1px solid var(--gold-border);">
        <strong style="color: var(--gold-light); display: block; font-size: 0.75rem; text-transform: uppercase;">Typical Climate</strong>
        <span style="font-size: 0.88rem;">${dest.weather}</span>
      </div>
      <div style="background: rgba(255,255,255,0.06); padding: 8px 16px; border-radius: var(--radius-sm); border: 1px solid var(--gold-border);">
        <strong style="color: var(--gold-light); display: block; font-size: 0.75rem; text-transform: uppercase;">Connectivity</strong>
        <span style="font-size: 0.88rem;">${dest.flightTime}</span>
      </div>
    </div>
    <p style="font-size: 1rem; color: #E2E8F0; line-height: 1.7; margin-bottom: 24px;">${dest.longDesc}</p>
    <h4 style="font-family: var(--font-royal); color: var(--gold-light); margin-bottom: 12px; font-size: 1.1rem;">Signature Royal Highlights</h4>
    <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-bottom: 30px;">
      ${dest.highlights.map(h => `<li style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: #CBD5E1;"><span style="color: var(--gold-primary);">✦</span> ${h}</li>`).join('')}
    </ul>
    <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--gold-border); padding-top: 20px; flex-wrap: wrap; gap: 16px;">
      <div>
        <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Starting From</span>
        <div style="font-family: var(--font-royal); font-size: 1.6rem; color: var(--gold-light); font-weight: 800;">${formatPrice(dest.priceUSD)}</div>
      </div>
      <div style="display: flex; gap: 12px;">
        <a href="contact.html?dest=${encodeURIComponent(dest.name)}" class="btn-outline-gold btn-sm">Inquire Custom</a>
        <a href="booking.html?dest=${encodeURIComponent(dest.id)}" class="btn-royal btn-sm">Book Destination</a>
      </div>
    </div>
  `;

  openRoyalModal(`${dest.name} — ${dest.country}`, content);
};

/* ==========================================================================
   8. TOUR PACKAGES PAGE LOGIC (Detail Modal + Filter)
   ========================================================================== */
function initPackagesPage() {
  const container = document.getElementById('packages-grid');
  const regionFilters = document.querySelectorAll('.pkg-filter-btn');
  const searchInput = document.getElementById('pkg-search-input');

  function renderPackages(region = 'all', searchQuery = '') {
    if (!container) return;

    let filtered = KINGS_DATA.packages;

    if (region !== 'all') {
      filtered = filtered.filter(p => p.region.toLowerCase() === region.toLowerCase());
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.destination.toLowerCase().includes(q) ||
        p.overview.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <h3 style="font-family: var(--font-royal); color: var(--gold-light); margin-bottom: 10px;">No Matching Tour Packages</h3>
          <p style="color: var(--text-muted);">Please refine your search or contact our travel curators for a bespoke itinerary.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(p => `
      <div class="package-card" data-id="${p.id}">
        <div class="pkg-img-wrap">
          <img src="${p.image}" alt="${p.title}" class="pkg-img" loading="lazy" />
          <span class="pkg-duration-badge">${p.duration}</span>
          <span class="pkg-rating-badge">★ ${p.rating}</span>
        </div>
        <div class="pkg-content">
          <span class="pkg-destination">${p.destination}</span>
          <h3 class="pkg-title">${p.title}</h3>
          <p class="pkg-description">${p.overview}</p>
          <div class="pkg-highlights">
            ${p.highlights.slice(0, 3).map(h => `<span class="pkg-highlight-item">✦ ${h}</span>`).join('')}
          </div>
          <div class="pkg-footer">
            <div class="pkg-price-box">
              <span class="pkg-price-label">Starting Price</span>
              <span class="pkg-price" data-price-usd="${p.priceUSD}">${formatPrice(p.priceUSD)}</span>
            </div>
            <div class="pkg-actions">
              <button class="btn-outline-gold btn-sm" onclick="showPackageModal('${p.id}')">View Details</button>
              <a href="booking.html?pkg=${encodeURIComponent(p.id)}" class="btn-royal btn-sm">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  regionFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      regionFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const reg = btn.getAttribute('data-region') || 'all';
      renderPackages(reg, searchInput ? searchInput.value : '');
    });
  });

  searchInput?.addEventListener('input', (e) => {
    const activeBtn = document.querySelector('.pkg-filter-btn.active');
    const reg = activeBtn ? activeBtn.getAttribute('data-region') : 'all';
    renderPackages(reg, e.target.value);
  });

  renderPackages();
}

window.showPackageModal = function(id) {
  const pkg = KINGS_DATA.packages.find(p => p.id === id);
  if (!pkg) return;

  const content = `
    <div style="margin-bottom: 24px; border-radius: var(--radius-md); overflow: hidden; max-height: 300px;">
      <img src="${pkg.image}" alt="${pkg.title}" style="width: 100%; height: 100%; object-fit: cover;" />
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--gold-border); padding-bottom: 14px;">
      <div>
        <span style="font-size: 0.8rem; color: var(--gold-light); text-transform: uppercase; font-weight: 700;">${pkg.destination} • ${pkg.duration}</span>
        <h3 style="font-family: var(--font-royal); font-size: 1.4rem; color: #FFFFFF; margin-top: 4px;">${pkg.title}</h3>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Starting At</span>
        <div style="font-family: var(--font-royal); font-size: 1.5rem; color: var(--gold-light); font-weight: 800;">${formatPrice(pkg.priceUSD)}</div>
      </div>
    </div>
    <p style="font-size: 0.95rem; color: #CBD5E1; line-height: 1.65; margin-bottom: 24px;">${pkg.overview}</p>
    
    <h4 style="font-family: var(--font-royal); color: var(--gold-light); font-size: 1.1rem; margin-bottom: 14px;">Day-by-Day Royal Itinerary</h4>
    <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 30px;">
      ${pkg.itinerary.map(item => `
        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(212,175,55,0.18); border-radius: var(--radius-sm); padding: 14px 18px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
            <span style="background: var(--gold-gradient); color: var(--bg-primary); font-size: 0.72rem; font-weight: 800; padding: 2px 8px; border-radius: 4px; font-family: var(--font-royal);">${item.day}</span>
            <strong style="color: #FFFFFF; font-size: 0.95rem;">${item.title}</strong>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-left: 2px;">${item.desc}</p>
        </div>
      `).join('')}
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
      <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-sm); padding: 16px;">
        <strong style="color: #34D399; display: block; font-size: 0.85rem; margin-bottom: 8px;">✓ Inclusions</strong>
        <ul style="font-size: 0.82rem; color: #CBD5E1; display: flex; flex-direction: column; gap: 6px;">
          ${pkg.inclusions.map(inc => `<li>• ${inc}</li>`).join('')}
        </ul>
      </div>
      <div style="background: rgba(244, 63, 94, 0.08); border: 1px solid rgba(244, 63, 94, 0.3); border-radius: var(--radius-sm); padding: 16px;">
        <strong style="color: #FB7185; display: block; font-size: 0.85rem; margin-bottom: 8px;">✕ Exclusions</strong>
        <ul style="font-size: 0.82rem; color: #CBD5E1; display: flex; flex-direction: column; gap: 6px;">
          ${pkg.exclusions.map(exc => `<li>• ${exc}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div style="display: flex; align-items: center; justify-content: flex-end; gap: 14px;">
      <a href="contact.html?pkg=${encodeURIComponent(pkg.title)}" class="btn-outline-gold btn-sm">Customize Itinerary</a>
      <a href="booking.html?pkg=${encodeURIComponent(pkg.id)}" class="btn-royal btn-sm">Reserve This Package</a>
    </div>
  `;

  openRoyalModal(pkg.title, content);
};

/* ==========================================================================
   9. DEDICATED 4-STEP LUXURY BOOKING ENGINE
   ========================================================================== */
let bookingState = {
  selectedPkgId: '',
  selectedPkgPriceUSD: 1250,
  travelDate: '',
  travelersCount: 2,
  selectedAddons: [],
  travelerName: '',
  travelerEmail: '',
  travelerPhone: '',
  travelerNotes: ''
};

function initBookingWizard() {
  const pkgSelect = document.getElementById('wizard-pkg-select');
  const travelersInput = document.getElementById('wizard-travelers');
  const dateInput = document.getElementById('wizard-date');
  const addonCheckboxes = document.querySelectorAll('.wizard-addon-check');
  const stepItems = document.querySelectorAll('.step-item');
  const wizardSteps = document.querySelectorAll('.wizard-step');
  const nextBtns = document.querySelectorAll('.wizard-next-btn');
  const prevBtns = document.querySelectorAll('.wizard-prev-btn');

  // Populate Packages in Select
  if (pkgSelect) {
    pkgSelect.innerHTML = KINGS_DATA.packages.map(p => `
      <option value="${p.id}" data-price="${p.priceUSD}">${p.title} (${p.duration} — ${formatPrice(p.priceUSD)}/person)</option>
    `).join('');

    // Preselect from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const prePkg = urlParams.get('pkg');
    const preDest = urlParams.get('dest');

    if (prePkg && KINGS_DATA.packages.some(p => p.id === prePkg)) {
      pkgSelect.value = prePkg;
    } else if (preDest) {
      const match = KINGS_DATA.packages.find(p => p.destination.toLowerCase().includes(preDest.toLowerCase()));
      if (match) pkgSelect.value = match.id;
    }

    bookingState.selectedPkgId = pkgSelect.value;
    const opt = pkgSelect.options[pkgSelect.selectedIndex];
    bookingState.selectedPkgPriceUSD = parseFloat(opt.getAttribute('data-price')) || 1250;

    pkgSelect.addEventListener('change', () => {
      bookingState.selectedPkgId = pkgSelect.value;
      const selected = pkgSelect.options[pkgSelect.selectedIndex];
      bookingState.selectedPkgPriceUSD = parseFloat(selected.getAttribute('data-price')) || 1250;
      calculateBookingTotal();
    });
  }

  // Input listeners
  travelersInput?.addEventListener('input', (e) => {
    bookingState.travelersCount = parseInt(e.target.value) || 1;
    calculateBookingTotal();
  });

  dateInput?.addEventListener('change', (e) => {
    bookingState.travelDate = e.target.value;
    calculateBookingTotal();
  });

  addonCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const price = parseFloat(cb.getAttribute('data-addon-price')) || 0;
      const title = cb.getAttribute('data-addon-name') || '';
      if (cb.checked) {
        bookingState.selectedAddons.push({ title, priceUSD: price });
        cb.closest('.addon-card')?.classList.add('selected');
      } else {
        bookingState.selectedAddons = bookingState.selectedAddons.filter(a => a.title !== title);
        cb.closest('.addon-card')?.classList.remove('selected');
      }
      calculateBookingTotal();
    });
  });

  // Step switching logic
  let currentStep = 1;

  function showStep(stepNum) {
    currentStep = stepNum;
    wizardSteps.forEach((s, idx) => {
      s.classList.toggle('active', idx + 1 === stepNum);
    });
    stepItems.forEach((item, idx) => {
      item.classList.remove('active', 'completed');
      if (idx + 1 === stepNum) item.classList.add('active');
      else if (idx + 1 < stepNum) item.classList.add('completed');
    });

    if (stepNum === 4) {
      populateConfirmationScreen();
    }
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Form validations per step
      if (currentStep === 1) {
        if (!dateInput.value) {
          showToast('Please select your preferred departure date');
          dateInput.focus();
          return;
        }
      }
      if (currentStep === 3) {
        const name = document.getElementById('traveler-name');
        const email = document.getElementById('traveler-email');
        const phone = document.getElementById('traveler-phone');
        if (!name.value.trim() || !email.value.trim() || !phone.value.trim()) {
          showToast('Please fill in your name, email, and phone number');
          return;
        }
        bookingState.travelerName = name.value;
        bookingState.travelerEmail = email.value;
        bookingState.travelerPhone = phone.value;
        bookingState.travelerNotes = document.getElementById('traveler-notes')?.value || '';
      }

      if (currentStep < 4) {
        showStep(currentStep + 1);
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentStep > 1) {
        showStep(currentStep - 1);
      }
    });
  });

  // Step Header Clicking
  stepItems.forEach(item => {
    item.addEventListener('click', () => {
      const stepToGo = parseInt(item.getAttribute('data-step'));
      if (stepToGo < currentStep) {
        showStep(stepToGo);
      }
    });
  });

  calculateBookingTotal();
}

function calculateBookingTotal() {
  const pkg = KINGS_DATA.packages.find(p => p.id === bookingState.selectedPkgId) || KINGS_DATA.packages[0];
  const pkgBaseTotalUSD = (pkg ? pkg.priceUSD : 1250) * bookingState.travelersCount;
  
  let addonsTotalUSD = 0;
  bookingState.selectedAddons.forEach(a => {
    addonsTotalUSD += a.priceUSD;
  });

  const grandTotalUSD = pkgBaseTotalUSD + addonsTotalUSD;

  // Update Summary UI elements
  const summaryPkgName = document.getElementById('summary-pkg-name');
  const summaryTravelers = document.getElementById('summary-travelers');
  const summaryPkgPrice = document.getElementById('summary-pkg-price');
  const summaryAddons = document.getElementById('summary-addons-list');
  const summaryAddonsPrice = document.getElementById('summary-addons-price');
  const summaryGrandTotal = document.getElementById('summary-grand-total');

  if (summaryPkgName) summaryPkgName.textContent = pkg.title;
  if (summaryTravelers) summaryTravelers.textContent = `${bookingState.travelersCount} Guest(s)`;
  if (summaryPkgPrice) summaryPkgPrice.textContent = formatPrice(pkgBaseTotalUSD);
  
  if (summaryAddons) {
    if (bookingState.selectedAddons.length === 0) {
      summaryAddons.innerHTML = '<span style="color: var(--text-muted); font-size: 0.85rem;">None Selected</span>';
    } else {
      summaryAddons.innerHTML = bookingState.selectedAddons.map(a => `<div style="font-size: 0.85rem; color: #CBD5E1;">+ ${a.title} (${formatPrice(a.priceUSD)})</div>`).join('');
    }
  }

  if (summaryAddonsPrice) summaryAddonsPrice.textContent = formatPrice(addonsTotalUSD);
  if (summaryGrandTotal) summaryGrandTotal.textContent = formatPrice(grandTotalUSD);
}

function populateConfirmationScreen() {
  const pkg = KINGS_DATA.packages.find(p => p.id === bookingState.selectedPkgId) || KINGS_DATA.packages[0];
  const refCode = `KT-2026-${Math.floor(100000 + Math.random() * 900000)}`;

  const refCodeEl = document.getElementById('confirm-ref-code');
  const confirmDetailsEl = document.getElementById('confirm-details-box');

  if (refCodeEl) refCodeEl.textContent = refCode;
  if (confirmDetailsEl) {
    confirmDetailsEl.innerHTML = `
      <div style="background: rgba(7, 26, 47, 0.95); border: 1.5px solid var(--gold-primary); border-radius: var(--radius-md); padding: 24px; text-align: left; max-width: 580px; margin: 0 auto 30px;">
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--gold-border); padding-bottom: 12px; margin-bottom: 14px;">
          <strong style="color: var(--gold-light);">Lead Traveler:</strong>
          <span>${bookingState.travelerName}</span>
        </div>
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; margin-bottom: 10px;">
          <span style="color: var(--text-muted);">Package:</span>
          <span style="font-weight: 600;">${pkg.title}</span>
        </div>
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; margin-bottom: 10px;">
          <span style="color: var(--text-muted);">Departure Date:</span>
          <span>${bookingState.travelDate || 'Flexible'}</span>
        </div>
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; margin-bottom: 10px;">
          <span style="color: var(--text-muted);">Number of Guests:</span>
          <span>${bookingState.travelersCount} Travelers</span>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 2px solid var(--gold-primary); padding-top: 14px; margin-top: 14px; font-family: var(--font-royal); font-size: 1.25rem;">
          <span style="color: var(--gold-light);">Total Estimate:</span>
          <span style="color: var(--gold-light); font-weight: 800;">${document.getElementById('summary-grand-total')?.textContent || '$0'}</span>
        </div>
      </div>
    `;
  }
}

// Print Confirmation Trigger
window.printBookingReceipt = function() {
  window.print();
};

/* ==========================================================================
   10. CONTACT / CONSULTATION FORM
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-journey-form');
  if (!form) return;

  // Pre-fill destination from query param
  const urlParams = new URLSearchParams(window.location.search);
  const preDest = urlParams.get('dest');
  const destInput = document.getElementById('contact-destination');
  if (preDest && destInput) {
    destInput.value = preDest;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value || 'Valued Traveler';
    const destination = document.getElementById('contact-destination')?.value || 'Your Dream Destination';

    const content = `
      <div style="text-align: center; padding: 20px 0;">
        <div style="font-size: 3rem; margin-bottom: 16px; color: var(--gold-light);">👑</div>
        <h3 style="font-family: var(--font-royal); font-size: 1.5rem; color: #FFFFFF; margin-bottom: 12px;">Consultation Request Received</h3>
        <p style="color: #CBD5E1; font-size: 1rem; line-height: 1.7; max-width: 520px; margin: 0 auto 24px;">
          Thank you, <strong>${name}</strong>. Our Senior Luxury Travel Curator has received your bespoke journey request for <strong>${destination}</strong>.
        </p>
        <div style="background: rgba(255,255,255,0.05); border: 1px dashed var(--gold-primary); padding: 16px; border-radius: var(--radius-md); max-width: 440px; margin: 0 auto 24px; font-size: 0.9rem; color: var(--gold-light);">
          A dedicated concierge specialist will contact you within <strong>3 hours</strong> with a customized private itinerary.
        </div>
        <button class="btn-royal" onclick="document.querySelector('.royal-modal-backdrop').classList.remove('open')">Understood</button>
      </div>
    `;

    openRoyalModal("Royal Journey Consultation", content);
    form.reset();
  });
}

/* ==========================================================================
   11. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   12. VIP NEWSLETTER
   ========================================================================== */
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('Welcome to King’s Royalty Club. Exclusive private fares unlocked!');
        input.value = '';
      }
    });
  });
}
