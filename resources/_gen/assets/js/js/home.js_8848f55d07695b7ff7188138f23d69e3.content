let breakpointElem = document.getElementById('scroll-breakpoint'),
    breakpointOffset = breakpointElem.offsetTop,
    navElem = document.getElementById('navbar');

window.addEventListener('resize', function() {
    breakpointOffset = breakpointElem.offsetTop;
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset > breakpointOffset) {
        navElem.classList.remove('navbar-hidden');
    } else {
        navElem.classList.add('navbar-hidden');
    }
}, false);
