// Burger Menu
$('.burger').on('click', function (event) {
    $(this).toggleClass('open');
    $('.navigation-bar').toggleClass('show');
});

// Modal
$('.btn-view').on('click', function () {
    $('.modal-container').addClass('active');
    $('body').css('overflow', 'hidden'); 
});
$('.close-modal').on('click', function () {
    $('.modal-container').removeClass('active');
    $('body').css('overflow', 'auto'); 
});

// Sticky Navbar
window.addEventListener('scroll', function () {
    var navHeight = $('header').height();
    $('header').toggleClass('fixed', $(window).scrollTop() > navHeight);
}, { passive: true });

// Scroll to Top
var btn = $('.scrollup');
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 500) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
});


// ScrollReveal Animations
if (typeof ScrollReveal === 'function') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '90px',
        duration: 2000,
        reset: true
    });

    sr.reveal('.social-icon, .feature-item, .progressbar-item, .services-block, .project-item, .form-item', { interval: 100 });
    sr.reveal('.sub-heading');
    sr.reveal('.col-right');
    sr.reveal('.heading', { delay: 100 });
    sr.reveal('.heading2', { delay: 200 });
    sr.reveal('.paragraph', { delay: 300 });
    sr.reveal('.btn-blk', { delay: 400 });

    // About Section
    sr.reveal('.about-col-left');
    sr.reveal('.about-heading');
    sr.reveal('.about2', { delay: 100 });
    sr.reveal('.about3', { delay: 200 });
    sr.reveal('.about-btn-blk', { delay: 300 });

    // CTA Section
    sr.reveal('.cta-inner', { delay: 100 });
    sr.reveal('.btn-outline', { delay: 200 });

    // Contact Section
    sr.reveal('.contact-inner');
}
