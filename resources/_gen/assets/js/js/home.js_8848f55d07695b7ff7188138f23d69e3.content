const breakpointElem = document.getElementById('scroll-breakpoint'),
    navElem = document.getElementById('navbar');

let breakpointOffset = breakpointElem.offsetTop;

window.addEventListener('resize', () => {
    breakpointOffset = breakpointElem.offsetTop;
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > breakpointOffset) {
        navElem.classList.remove('navbar-hidden');
    } else {
        navElem.classList.add('navbar-hidden');
    }
}, false);
