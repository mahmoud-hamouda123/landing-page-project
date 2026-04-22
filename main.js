
// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form submission handler
function handleSubmit() {
    const btn = event.target;
    btn.textContent = '✓ تم الإرسال بنجاح!';
    btn.style.background = '#40916c';
    setTimeout(() => {
        btn.textContent = 'ابدأ الآن مجاناً';
        btn.style.background = '';
    }, 3000);
}

// Intersection Observer for fade-up animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// Animate stats numbers
function animateNumber(el, target, suffix = '') {
    let current = 0;
    const step = target / 60;
    const interval = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = (suffix === '$' ? '$' : '') +
            (current >= 1000 ? Math.floor(current / 1000) + 'K' : Math.floor(current)) +
            (suffix === 'M' ? 'M' : '') + '+';
        if (current >= target) clearInterval(interval);
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.big-stat h3').forEach(el => statsObserver.observe(el));
