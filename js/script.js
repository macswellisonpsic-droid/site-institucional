/**
 * Arquitetura de Scripts - Portfólio Macs Wellison
 * Tecnologias: Vanilla JavaScript (ES6+)
 * Padrões: IIFE para encapsulamento, Intersection Observer API
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. Atualizar Ano Dinâmico no Footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 2. Menu Mobile e Scroll Lock
    const menuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.header__link');

    const toggleMenu = () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        menuBtn.classList.toggle('is-active');
        nav.classList.toggle('is-active');
        document.body.style.overflow = isExpanded ? 'auto' : 'hidden'; // Evita scroll ao abrir menu
    };

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', toggleMenu);
        
        // Fecha menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('is-active')) {
                    toggleMenu();
                }
            });
        });
    }

    // 3. Header Inteligente (Efeito Glass/Sombra ao Rolar)
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 4. FAQ Accordion (Lógica Otimizada)
    const accordions = document.querySelectorAll('.accordion__btn');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const content = this.nextElementSibling;
            
            // Fecha todos os outros (Opcional - remova se quiser abrir múltiplos)
            accordions.forEach(otherAcc => {
                if (otherAcc !== this) {
                    otherAcc.setAttribute('aria-expanded', 'false');
                    otherAcc.nextElementSibling.style.maxHeight = null;
                }
            });

            // Alterna o atual
            this.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // 5. Scroll Animations (Intersection Observer API)
    // Isso garante nota alta no Web Vitals pois não escuta evento de scroll constantemente
    const revealElements = document.querySelectorAll('.js-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Desconecta o elemento após a animação rodar uma vez para salvar processamento
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Anima quando 10% do elemento aparece
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

});