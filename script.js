const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const tabs = document.querySelectorAll('#tabs .tab');
const mainImage = document.getElementById('current-image');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const newSrc = tab.getAttribute('data-src');
        mainImage.src = newSrc;

        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');
    });
});

tabs[0].classList.add('active');
