const breakpointElem = document.getElementById('scroll-breakpoint'),
    navElem = document.getElementById('navbar');

let breakpointOffset = breakpointElem.offsetTop;

function update(isIntersectionObserver, entries) {
    if (isIntersectionObserver === true) {
        if (entries[0].isIntersecting) {
            navElem.classList.add('navbar-hidden');
        } else {
            navElem.classList.remove('navbar-hidden');
        }
    } else {
        if (window.pageYOffset > breakpointOffset) {
            navElem.classList.remove('navbar-hidden');
            return;
        } else {
            navElem.classList.add('navbar-hidden');
        }
    }
}

window.addEventListener('resize', () => {
    breakpointOffset = breakpointElem.offsetTop;
});

if (typeof window.IntersectionObserver == 'function') {
    let observer = new IntersectionObserver(update.bind(null, true));
    observer.observe(breakpointElem);
} else {
    window.addEventListener('scroll', update.bind(null, false), false);
}

update(false);
