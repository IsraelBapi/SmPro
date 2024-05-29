const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-list');

menuToggle.addEventListener('click', function() {
    const isOpen = this.getAttribute('data-open') === 'true';

    if (isOpen) {
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('desactive');
        this.setAttribute('data-open', 'false');
    } else {
        mobileMenu.classList.add('active');
        mobileMenu.classList.remove('desactive');
        this.setAttribute('data-open', 'true');
    }
});
