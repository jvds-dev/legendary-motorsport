window.onscroll = function() {
    const fixedHeader = document.getElementById('fixed-header');
    const firstElement = document.getElementById('first');
    const logo = document.getElementById('logo');

    if (window.scrollY >= firstElement.offsetHeight) {
        fixedHeader.classList.add('active');
        // logo.style.opacity = '1';
    } else {
        fixedHeader.classList.remove('active');
        // logo.style.opacity = '0';
    }
};
