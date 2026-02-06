// Daratan Kopi 25 - Main JavaScript

// DOM Elements
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const scrollProgress = document.getElementById("scrollProgress");
const menuContainer = document.getElementById("menuContainer");
const menuFilters = document.querySelectorAll(".menu-filter");
const galleryGrid = document.getElementById("galleryGrid");
const lightboxModal = document.getElementById("lightboxModal");
const closeLightbox = document.getElementById("closeLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDesc = document.getElementById("lightboxDesc");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");
const testimonialSlider = document.getElementById("testimonialSlider");
const testimonialDots = document.getElementById("testimonialDots");
const prevTestimonial = document.getElementById("prevTestimonial");
const nextTestimonial = document.getElementById("nextTestimonial");
const whatsappForm = document.getElementById("whatsappForm");

// State Variables
let currentTestimonial = 0;
let currentImageIndex = 0;
const testimonials = [];
const galleryImages = [];

// Menu Data
const menuData = [
  {
    id: 1,
    name: "Espresso Zeus",
    description:
      "Espresso kuat dengan sentuhan cokelat dan karamel, diberi nama seperti dewa petir.",
    price: "25.000",
    category: "kopi",
    image: "espresso-zeus",
  },
  {
    id: 2,
    name: "Cappuccino Olympus",
    description:
      "Paduan espresso, susu steamed, dan busa susu tebal dengan taburan bubuk cokelat.",
    price: "30.000",
    category: "kopi",
    image: "cappuccino-olympus",
  },
  {
    id: 3,
    name: "Latte Athena",
    description:
      "Espresso dengan susu steamed lembut, latte art khusus dengan tema mitologi.",
    price: "32.000",
    category: "kopi",
    image: "latte-athena",
  },
  {
    id: 4,
    name: "Cold Brew Poseidon",
    description:
      "Kopi cold brew dingin dengan rasa yang halus dan sedikit asam, segar seperti lautan.",
    price: "28.000",
    category: "kopi",
    image: "cold-brew-poseidon",
  },
  {
    id: 5,
    name: "Matcha Hades",
    description:
      "Matcha premium dengan susu almond, rasa earthy yang dalam dan creamy.",
    price: "35.000",
    category: "non-kopi",
    image: "matcha-hades",
  },
  {
    id: 6,
    name: "Chocolate Hermes",
    description:
      "Cokelat panas dengan whipped cream dan marshmallow, cepat dan nikmat seperti dewa kurir.",
    price: "27.000",
    category: "non-kopi",
    image: "chocolate-hermes",
  },
  {
    id: 7,
    name: "Lemon Tea Apollo",
    description:
      "Teh lemon segar dengan madu, menyegarkan seperti matahari terbit.",
    price: "22.000",
    category: "non-kopi",
    image: "lemon-tea-apollo",
  },
  {
    id: 8,
    name: "Croissant Ares",
    description:
      "Croissant renyah dengan isian cokelat atau keju, kuat dan memuaskan.",
    price: "18.000",
    category: "snack",
    image: "croissant-ares",
  },
  {
    id: 9,
    name: "Brownie Hera",
    description:
      "Brownie cokelat pekat dengan kacang kenari, elegan dan memikat.",
    price: "20.000",
    category: "snack",
    image: "brownie-hera",
  },
  {
    id: 10,
    name: "Sandwich Demeter",
    description:
      "Sandwich isian sayuran segar, keju, dan daging asap, mengenyangkan seperti panen.",
    price: "25.000",
    category: "snack",
    image: "sandwich-demeter",
  },
  {
    id: 11,
    name: "Mocha Aphrodite",
    description:
      "Perpaduan sempurna espresso, cokelat, dan susu steamed, memikat seperti dewi cinta.",
    price: "33.000",
    category: "kopi",
    image: "mocha-aphrodite",
  },
  {
    id: 12,
    name: "Milkshake Artemis",
    description:
      "Milkshake vanilla dengan stroberi segar, bebas laktosa seperti dewi bulan.",
    price: "30.000",
    category: "non-kopi",
    image: "milkshake-artemis",
  },
];

// Testimonial Data
const testimonialData = [
  {
    name: "Rizky Pratama",
    role: "Pecinta Kopi",
    comment:
      "Suasana di Daratan Kopi 25 benar-benar unik! Nuansa mitologi Yunani-nya membuat pengalaman ngopi jadi epik. Kopinya juga top notch, terutama Espresso Zeus-nya!",
    rating: 5,
    date: "2 minggu lalu",
  },
  {
    name: "Sari Dewi",
    role: "Freelancer",
    comment:
      "Tempat favorit untuk bekerja. WiFi kencang, colokan banyak, dan kopinya selalu fresh. Pelayannya ramah dan cepat. Sudah langganan sejak 2020!",
    rating: 5,
    date: "1 bulan lalu",
  },
  {
    name: "Andi Wijaya",
    role: "Mahasiswa",
    comment:
      "Harganya terjangkau untuk kualitas premium. Matcha Hades-nya bikin nagih! Suasana nyaman buat ngerjain tugas atau sekadar nongkrong.",
    rating: 4,
    date: "3 hari lalu",
  },
  {
    name: "Budi Santoso",
    role: "Pegawai Kantoran",
    comment:
      "Tempat meeting yang perfect. Suasananya berbeda dari kedai kopi lain. Menu snack-nya juga enak-enak. Croissant Ares favorit saya!",
    rating: 5,
    date: "2 bulan lalu",
  },
  {
    name: "Maya Indah",
    role: "Food Blogger",
    comment:
      "Foto-fotonya instagramable banget! Lighting-nya bagus, interior-nya aesthetic dengan tema Zeus. Cocok buat konten kreator. Kopinya juga photogenic!",
    rating: 5,
    date: "1 minggu lalu",
  },
];

// Gallery Data
const galleryData = [
  {
    id: 1,
    title: "Interior Utama",
    description: "Suasana utama kedai dengan dekorasi tema Zeus dan petir.",
    category: "interior",
  },
  {
    id: 2,
    title: "Espresso Zeus",
    description: "Menu signature kami dengan sentuhan cokelat dan karamel.",
    category: "menu",
  },
  {
    id: 3,
    title: "Area Kerja",
    description: "Area nyaman dengan colokan dan WiFi untuk bekerja.",
    category: "fasilitas",
  },
  {
    id: 4,
    title: "Latte Art Khusus",
    description: "Latte art dengan tema mitologi dibuat oleh barista kami.",
    category: "menu",
  },
  {
    id: 5,
    title: "Spot Instagramable",
    description: "Area favorit pengunjung untuk berfoto dengan dekorasi petir.",
    category: "interior",
  },
  {
    id: 6,
    title: "Proses Brewing",
    description: "Barista kami sedang menyeduh kopi dengan teknik khusus.",
    category: "proses",
  },
];

// Initialize Functions
function init() {
  // Initialize event listeners
  setupEventListeners();

  // Render initial data
  renderMenuItems("all");
  renderTestimonials();
  renderGallery();

  // Set current year
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

// Event Listeners Setup
function setupEventListeners() {
  // Scroll events
  window.addEventListener("scroll", handleScroll);

  // Mobile menu
  menuToggle.addEventListener("click", openMobileMenu);
  closeMenu.addEventListener("click", closeMobileMenu);

  // Menu filter clicks
  menuFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      // Remove active class from all filters
      menuFilters.forEach((f) => f.classList.remove("active"));
      // Add active class to clicked filter
      filter.classList.add("active");
      // Filter menu items
      const filterValue = filter.getAttribute("data-filter");
      renderMenuItems(filterValue);
    });
  });

  // Lightbox events
  closeLightbox.addEventListener("click", closeLightboxModal);
  prevImage.addEventListener("click", showPreviousImage);
  nextImage.addEventListener("click", showNextImage);

  // Testimonial navigation
  prevTestimonial.addEventListener("click", showPrevTestimonial);
  nextTestimonial.addEventListener("click", showNextTestimonial);

  // Form submission
  whatsappForm.addEventListener("submit", handleWhatsAppSubmit);

  // Close lightbox when clicking outside
  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) {
      closeLightboxModal();
    }
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link-mobile").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

// Scroll Handlers
function handleScroll() {
  // Navbar background on scroll
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(11, 15, 12, 0.9)";
    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.backdropFilter = "none";
    navbar.style.boxShadow = "none";
  }

  // Scroll progress bar
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + "%";
}

// Mobile Menu Functions
function openMobileMenu() {
  mobileMenu.style.height = "100vh";
  mobileMenu.style.padding = "0";
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.style.height = "0";
  mobileMenu.style.padding = "0";
  document.body.style.overflow = "auto";
}

// Smooth Scroll Function
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  }
}

// Menu Rendering Functions
function renderMenuItems(filter = "all") {
  // Clear current menu items
  menuContainer.innerHTML = "";

  // Filter menu items
  let filteredItems = menuData;
  if (filter !== "all") {
    filteredItems = menuData.filter((item) => item.category === filter);
  }

  // Render menu items
  filteredItems.forEach((item) => {
    const menuCard = createMenuCard(item);
    menuContainer.appendChild(menuCard);
  });
}

function createMenuCard(item) {
  const card = document.createElement("div");
  card.className = "menu-card";
  card.setAttribute("data-aos", "fade-up");

  // Generate image color based on category
  let gradient = "";
  switch (item.category) {
    case "kopi":
      gradient = "linear-gradient(135deg, #78350f 0%, #92400e 100%)";
      break;
    case "non-kopi":
      gradient = "linear-gradient(135deg, #065f46 0%, #047857 100%)";
      break;
    case "snack":
      gradient = "linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)";
      break;
    default:
      gradient = "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)";
  }

  card.innerHTML = `
        <div class="menu-card-image" style="background: ${gradient};">
            <div class="menu-card-badge">
                ${item.category === "kopi" ? "☕" : item.category === "non-kopi" ? "🥤" : "🥐"} ${item.category}
            </div>
            <div class="absolute bottom-4 left-4 z-10">
                <h4 class="text-xl font-heading font-bold">${item.name}</h4>
                <p class="text-accent-gold font-bold text-lg">Rp ${item.price}</p>
            </div>
        </div>
        <div class="p-6">
            <p class="text-gray-400 mb-6">${item.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">Kode: DK25-${item.id.toString().padStart(3, "0")}</span>
                <button class="text-accent-gold hover:text-glow-cyan transition-colors font-medium" onclick="smoothScroll('#contact')">
                    Pesan <i class="fas fa-arrow-right ml-1"></i>
                </button>
            </div>
        </div>
    `;

  return card;
}

// Testimonial Functions
function renderTestimonials() {
  // Clear testimonial slider
  testimonialSlider.innerHTML = "";
  testimonialDots.innerHTML = "";

  // Create testimonial slides
  testimonialData.forEach((testimonial, index) => {
    // Create slide
    const slide = document.createElement("div");
    slide.className = `testimonial-slide ${index === 0 ? "active" : ""}`;

    // Generate star rating
    let stars = "";
    for (let i = 0; i < 5; i++) {
      if (i < testimonial.rating) {
        stars += '<i class="fas fa-star text-accent-gold"></i>';
      } else {
        stars += '<i class="far fa-star text-gray-600"></i>';
      }
    }

    slide.innerHTML = `
            <div class="text-center">
                <div class="text-5xl mb-6 text-accent-gold">"</div>
                <p class="text-xl text-gray-300 italic mb-8 px-4">${testimonial.comment}</p>
                <div class="flex justify-center mb-4">
                    ${stars}
                </div>
                <h4 class="font-heading font-bold text-xl mb-2">${testimonial.name}</h4>
                <p class="text-gray-400 mb-1">${testimonial.role}</p>
                <p class="text-gray-500 text-sm">${testimonial.date}</p>
            </div>
        `;

    testimonialSlider.appendChild(slide);

    // Create dot
    const dot = document.createElement("div");
    dot.className = `testimonial-dot ${index === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => showTestimonial(index));
    testimonialDots.appendChild(dot);
  });

  // Store testimonials in array for navigation
  testimonials.length = 0;
  testimonials.push(...document.querySelectorAll(".testimonial-slide"));
}

function showTestimonial(index) {
  // Hide current testimonial
  testimonials[currentTestimonial].classList.remove("active");
  testimonialDots.children[currentTestimonial].classList.remove("active");

  // Update current index
  currentTestimonial = index;

  // Show new testimonial
  testimonials[currentTestimonial].classList.add("active");
  testimonialDots.children[currentTestimonial].classList.add("active");
}

function showPrevTestimonial() {
  let newIndex = currentTestimonial - 1;
  if (newIndex < 0) newIndex = testimonials.length - 1;
  showTestimonial(newIndex);
}

function showNextTestimonial() {
  let newIndex = currentTestimonial + 1;
  if (newIndex >= testimonials.length) newIndex = 0;
  showTestimonial(newIndex);
}

// Auto rotate testimonials
setInterval(showNextTestimonial, 5000);

// Gallery Functions
function renderGallery() {
  // Clear gallery grid
  galleryGrid.innerHTML = "";

  // Create gallery items
  galleryData.forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.setAttribute("data-aos", "fade-up");
    galleryItem.setAttribute("data-index", index);

    // Generate gradient based on index
    const gradients = [
      "linear-gradient(135deg, #0f766e 0%, #115e59 100%)",
      "linear-gradient(135deg, #78350f 0%, #92400e 100%)",
      "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
      "linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)",
      "linear-gradient(135deg, #065f46 0%, #047857 100%)",
      "linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)",
    ];

    galleryItem.innerHTML = `
            <div style="background: ${gradients[index % gradients.length]}; height: 100%;"></div>
            <div class="gallery-item-overlay">
                <h4 class="font-heading font-bold text-lg mb-2">${item.title}</h4>
                <p class="text-gray-300 text-sm">${item.description}</p>
            </div>
        `;

    galleryItem.addEventListener("click", () => openLightbox(index));
    galleryGrid.appendChild(galleryItem);

    // Store gallery images for lightbox
    galleryImages.push({
      element: galleryItem,
      title: item.title,
      description: item.description,
      gradient: gradients[index % gradients.length],
    });
  });
}

function openLightbox(index) {
  currentImageIndex = index;
  const image = galleryImages[index];

  // Set lightbox content
  lightboxImage.style.background = image.gradient;
  lightboxImage.style.height = "400px";
  lightboxTitle.textContent = image.title;
  lightboxDesc.textContent = image.description;

  // Show lightbox
  lightboxModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightboxModal() {
  lightboxModal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

function showPreviousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
  openLightbox(currentImageIndex);
}

function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
  openLightbox(currentImageIndex);
}

// WhatsApp Form Handler
function handleWhatsAppSubmit(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate phone number (Indonesian format)
  const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
  if (!phoneRegex.test(phone)) {
    alert("Mohon masukkan nomor WhatsApp yang valid (contoh: 081234567890)");
    return;
  }

  // Format phone number for WhatsApp
  let formattedPhone = phone;
  if (formattedPhone.startsWith("0")) {
    formattedPhone = "62" + formattedPhone.substring(1);
  } else if (formattedPhone.startsWith("62")) {
    // Already correct format
  } else if (formattedPhone.startsWith("+62")) {
    formattedPhone = formattedPhone.substring(1);
  }

  // Create message template
  const encodedMessage = encodeURIComponent(
    `Halo Daratan Kopi 25, saya ${name}.\n\n${message}\n\nSaya menghubungi dari website dengan nomor: ${phone}`,
  );

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");

  // Reset form
  whatsappForm.reset();

  // Show confirmation message
  alert("Terima kasih! WhatsApp akan terbuka untuk mengirim pesan Anda.");
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
