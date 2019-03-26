const breakpointElem = document.getElementById('scroll-breakpoint'),
    navElem = document.getElementById('navbar');

let breakpointOffset = breakpointElem.offsetTop;

function update() {
    if (window.pageYOffset > breakpointOffset) {
        navElem.classList.remove('navbar-hidden');
    } else {
        navElem.classList.add('navbar-hidden');
    }

    let opacity = Math.min(1, Math.max(0, window.pageYOffset / breakpointOffset)),
        color = `rgba(44, 62, 80, ${opacity})`;

    navElem.style.backgroundColor = color;
}

window.addEventListener('resize', () => {
    breakpointOffset = breakpointElem.offsetTop;
});

window.addEventListener('scroll', update, false);

update();
