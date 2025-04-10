document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-button');
  
    downloadBtn.addEventListener('click', () => {
      
      downloadBtn.classList.add('loading');
      downloadBtn.textContent = 'Carregando...';
  
      
      setTimeout(() => {
        downloadBtn.classList.remove('loading');
        downloadBtn.textContent = 'Download';
      }, 7000);
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    let velocity = 0;
    let rafId = null;
    let isBouncing = false;

    function bounceScroll() {
        if (Math.abs(velocity) < 0.5) {
            velocity = 0;
            isBouncing = false;
            cancelAnimationFrame(rafId);
            return;
        }

        window.scrollBy(0, velocity);
        velocity *= 0.85; // Controla a suavidade do bounce
        rafId = requestAnimationFrame(bounceScroll);
    }

    function startBounce(deltaY) {
        if (isBouncing) return;
        velocity = deltaY * 0.4; // Controla a força inicial do bounce
        isBouncing = true;
        bounceScroll();
    }

    function checkScrollEdge(e) {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        const atTop = scrollTop <= 0 && e.deltaY < 0;
        const atBottom = scrollTop + windowHeight >= docHeight && e.deltaY > 0;

        if (atTop || atBottom) {
            e.preventDefault();
            startBounce(e.deltaY);
        }
    }

    // Desktop: roda no scroll do mouse
    window.addEventListener('wheel', checkScrollEdge, { passive: false });

    // Mobile: roda no toque
    let touchStartY = 0;

    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;

        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        const atTop = scrollTop <= 0 && deltaY < 0;
        const atBottom = scrollTop + windowHeight >= docHeight && deltaY > 0;

        if (atTop || atBottom) {
            e.preventDefault();
            startBounce(deltaY);
        }
    }, { passive: false });
});
