document.addEventListener('DOMContentLoaded', () => {
    // 1. Actualizar año en el footer automáticamente
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Efecto scroll en el Header y Parallax del Iso
    const header = document.getElementById('main-header');
    const isoBg = document.querySelector('.hero-bg-iso');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;

        // Header Background Transition
        if (scrollPosition > 50) {
            header.style.background = 'rgba(13, 13, 17, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(13, 13, 17, 0.85)';
            header.style.boxShadow = 'none';
        }

        // Iso Parallax Effect
        if (isoBg) {
            // El Iso se mueve hacia abajo suavemente (0.4x velocidad del scroll)
            isoBg.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.4}px))`;
        }
    });

    // 3. Contact Modal Logic
    const contactModal = document.getElementById('contact-modal');
    const closeModalBtn = document.querySelector('.close-btn');

    const openContactModal = () => {
        if (!contactModal) return;
        contactModal.style.display = 'flex';
        // Timeout to allow display:flex to apply before transition
        setTimeout(() => {
            contactModal.classList.add('show');
        }, 10);
    };

    const closeContactModal = () => {
        if (!contactModal) return;
        contactModal.classList.remove('show');
        setTimeout(() => {
            contactModal.style.display = 'none';
        }, 300); // Matches CSS transition duration
    };

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeContactModal);
    }

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            closeContactModal();
        }
    });

    // 4. Scroll suave (Smooth Scrolling) para enlaces de anclaje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Interceptar enlaces de contacto para abrir el Modal
            if (targetId === '#contact') {
                e.preventDefault();
                openContactModal();
                return;
            }

            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Custom Select Logic
    const customSelectWrapper = document.querySelector('.custom-select-wrapper');
    if (customSelectWrapper) {
        const customSelectTrigger = customSelectWrapper.querySelector('.custom-select-trigger');
        const customOptions = customSelectWrapper.querySelectorAll('.custom-option');
        const hiddenSelect = document.getElementById('event-type');

        customSelectTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            customSelectWrapper.classList.toggle('open');
        });

        customOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                // Actualizar texto visible
                customSelectTrigger.querySelector('span').textContent = this.textContent;
                // Actualizar valor oculto
                hiddenSelect.value = this.getAttribute('data-value');
                // Cerrar el desplegable
                customSelectWrapper.classList.remove('open');
            });
        });

        // Close when clicking outside
        window.addEventListener('click', function() {
            customSelectWrapper.classList.remove('open');
        });
    }

    // Lógica para toggle del menú móvil
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle && mainMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mainMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mainMenu.classList.remove('active');
            });
        });
    }

    // ==========================================
    // Premium Effects (Particles & Liquid Reveal)
    // ==========================================
    // Cookie Banner Logic
    // ==========================================
    const cookieBanner = document.getElementById('cookie-banner');
    const btnAcceptCookies = document.getElementById('btn-accept-cookies');
    const btnRejectCookies = document.getElementById('btn-reject-cookies');

    if (cookieBanner) {
        // Check if user has already made a choice
        const cookieChoice = localStorage.getItem('cookieChoice');
        
        if (!cookieChoice) {
            // Show banner after a short delay
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 1000);
        }

        const handleCookieChoice = (choice) => {
            localStorage.setItem('cookieChoice', choice);
            cookieBanner.classList.remove('show');
        };

        if (btnAcceptCookies) {
            btnAcceptCookies.addEventListener('click', () => handleCookieChoice('accepted'));
        }

        if (btnRejectCookies) {
            btnRejectCookies.addEventListener('click', () => handleCookieChoice('rejected'));
        }
    }

    // ==========================================
    // Showcase Logic (Carousel & Modal)
    // ==========================================
    const navShowcaseLink = document.getElementById('nav-showcase-link');
    const formatDetailModal = document.getElementById('format-detail-modal');
    const detailCloseBtn = document.querySelector('.detail-close-btn');
    const coverflowItems = document.querySelectorAll('.coverflow-item');
    const showcaseActiveTitle = document.getElementById('showcase-active-title');
    const showcaseActiveDesc = document.getElementById('showcase-active-desc');
    const btnReserveFormat = document.getElementById('btn-reserve-format');
    const coverflowPrevBtn = document.querySelector('.coverflow-prev');
    const coverflowNextBtn = document.querySelector('.coverflow-next');
    
    let currentCoverflowIndex = 0; // Starts at 0 (DJ Hits)
    
    function updateCoverflow() {
        if (coverflowItems.length === 0) return;
        
        coverflowItems.forEach((item, index) => {
            item.className = 'coverflow-item';
            
            let offset = index - currentCoverflowIndex;
            const n = coverflowItems.length;
            
            // Circular shortest path logic
            if (offset > Math.floor(n / 2)) {
                offset -= n;
            } else if (offset < -Math.floor(n / 2)) {
                offset += n;
            }
            
            if (offset === 0) {
                item.classList.add('active');
            } else if (offset === -1) {
                item.classList.add('prev-1');
            } else if (offset === 1) {
                item.classList.add('next-1');
            } else if (offset === -2) {
                item.classList.add('prev-2');
            } else if (offset === 2) {
                item.classList.add('next-2');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    if (coverflowItems.length > 0) {
        updateCoverflow();
        
        coverflowItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (index !== currentCoverflowIndex) {
                    currentCoverflowIndex = index;
                    updateCoverflow();
                } else {
                    // Si ya está activo y se le hace clic, abrir modal de detalles
                    const title = item.getAttribute('data-title');
                    const desc = item.getAttribute('data-desc');
                    const format = item.getAttribute('data-format');
                    
                    if (showcaseActiveTitle) showcaseActiveTitle.textContent = title;
                    if (showcaseActiveDesc) showcaseActiveDesc.textContent = desc;
                    if (btnReserveFormat) btnReserveFormat.setAttribute('data-format', format);
                    
                    if (formatDetailModal) formatDetailModal.classList.add('show');
                }
            });
        });

        // Swipe logic for Coverflow
        const coverflowContainer = document.querySelector('.coverflow-container');
        if (coverflowContainer) {
            let touchStartX = 0;
            let touchEndX = 0;
            
            coverflowContainer.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            coverflowContainer.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleCoverflowSwipe();
            }, { passive: true });
            
            function handleCoverflowSwipe() {
                const swipeThreshold = 50;
                if (touchEndX < touchStartX - swipeThreshold) {
                    currentCoverflowIndex = (currentCoverflowIndex + 1) % coverflowItems.length;
                    updateCoverflow();
                }
                if (touchEndX > touchStartX + swipeThreshold) {
                    currentCoverflowIndex = (currentCoverflowIndex - 1 + coverflowItems.length) % coverflowItems.length;
                    updateCoverflow();
                }
            }
        }
        
        // Arrow Buttons Logic
        if (coverflowPrevBtn) {
            coverflowPrevBtn.addEventListener('click', () => {
                currentCoverflowIndex = (currentCoverflowIndex - 1 + coverflowItems.length) % coverflowItems.length;
                updateCoverflow();
            });
        }
        
        if (coverflowNextBtn) {
            coverflowNextBtn.addEventListener('click', () => {
                currentCoverflowIndex = (currentCoverflowIndex + 1) % coverflowItems.length;
                updateCoverflow();
            });
        }
    }

    // Modal Triggers
    if (detailCloseBtn && formatDetailModal) {
        detailCloseBtn.addEventListener('click', () => {
            formatDetailModal.classList.remove('show');
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === formatDetailModal) {
            formatDetailModal.classList.remove('show');
        }
    });

    // Route "RESERVE" to Contact Modal
    if (btnReserveFormat && contactModal) {
        btnReserveFormat.addEventListener('click', () => {
            const formatValue = btnReserveFormat.getAttribute('data-format');
            
            if (formatDetailModal) formatDetailModal.classList.remove('show');
            if (contactModal) contactModal.classList.add('show');
            
            const optionToSelect = Array.from(customOptions).find(opt => opt.getAttribute('data-value') === formatValue);
            if (optionToSelect && customSelectTrigger) {
                customSelectTrigger.innerHTML = optionToSelect.textContent + '<div class="arrow"></div>';
                if (hiddenSelect) hiddenSelect.value = formatValue;
                
                customOptions.forEach(opt => opt.classList.remove('active'));
                optionToSelect.classList.add('active');
            }
        });
    }

    // ==========================================

    // 1. Liquid Reveal with Intersection Observer
    const liquidElements = document.querySelectorAll('.liquid-reveal');
    if (liquidElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        liquidElements.forEach(el => revealObserver.observe(el));
    }

    // 2. Interactive Particles Canvas
    const canvas = document.getElementById('particles-bg');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        
        const mouse = { x: null, y: null, radius: 150 };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        }

        window.addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5 + 0.5;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
            }

            draw() {
                ctx.fillStyle = 'rgba(139, 92, 246, 0.8)'; // Violeta neón más visible
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Natural movement
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx = -this.vx;
                if (this.y < 0 || this.y > height) this.vy = -this.vy;

                // Mouse interaction
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let maxDistance = mouse.radius;
                    let force = (maxDistance - distance) / maxDistance;
                    let directionX = forceDirectionX * force * this.density;
                    let directionY = forceDirectionY * force * this.density;

                    if (distance < mouse.radius) {
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
                this.draw();
            }
        }

        function initParticles() {
            particles = [];
            // Amount of particles depends on screen size to keep performance
            const numberOfParticles = (width * height) / 15000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            requestAnimationFrame(animate);
        }

        resize();
        animate();
    }

    // ==========================================
    // 3D Parallax Isotipo Hero
    // ==========================================
    const heroIsoWrapper = document.querySelector('.iso-3d-wrapper');
    const isoGlare = document.querySelector('.iso-glare');
    
    if (heroIsoWrapper) {
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        let currentScroll = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        window.addEventListener('scroll', () => {
            currentScroll = window.scrollY;
        });

        const heroIsoContainer = document.getElementById('hero-iso-container');

        function render3DIso() {
            // Se ha eliminado la rotación a petición del usuario. Solo se mantiene el parallax vertical.
            
            // Efecto Parallax Vertical: El isotipo "baja" físicamente por la pantalla
            // Independiente del tamaño del contenido, solo basado en los píxeles scrolleados
            if (heroIsoContainer) {
                const parallaxY = currentScroll * 0.3; // Desciende 0.3px por cada pixel de scroll
                // Solo trasladamos en Y basado en el parallax, ya que en CSS ahora está bottom:0
                heroIsoContainer.style.transform = `translate(-50%, ${parallaxY}px)`;
            }

            requestAnimationFrame(render3DIso);
        }
        
        render3DIso();
    }
});
