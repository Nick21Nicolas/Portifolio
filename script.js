document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function showAlert(platform) {
    let url = '';
    if (platform === 'LinkedIn') {
        url = 'https://www.linkedin.com/in/seu-perfil';
    } else if (platform === 'GitHub') {
        url = 'https://github.com/Nick21Nicolas'; 
    }
    window.open(url, '_blank'); 
}

function downloadCV() {
    window.location.href = 'CV_NicolasPriore.pdf';
}

function animateOnScroll() {
    const elements = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

function typeWriter() {
    const title = document.querySelector('.profile-header h1');
    const text = 'Nicolas Priore';
    title.textContent = '';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 100);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeWriter, 500);
    setTimeout(animateOnScroll, 1000);
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    document.body.style.backgroundPositionY = parallax + 'px';
});
