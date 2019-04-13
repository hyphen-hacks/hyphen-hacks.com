const anims = [
    {
        trigger: 'scroll-breakpoint',
        target: 'navbar',
        class: 'navbar-hidden',
        once: false
    }
];

function trigger(isIntersectionObserver, anim, entries, observer) {
    if (isIntersectionObserver) {
        if (entries[0].isIntersecting) {
            anim.$target.classList.add(anim.class);
            if (anim.once) {
                observer.disconnect();
                anim.ignore = true;
            }
        } else {
            anim.$target.classList.remove(anim.class);
        }
    } else {
        // do all animations
        for (let i in anims) {
            let a = anims[i];
            if (a.ignore) {
                continue;
            }

            if (window.pageYOffset <= a.triggerOffset && !a.$target.classList.contains(a.class)) {
                a.$target.classList.add(a.class);
                if (a.once) {
                    a.ignore = true;
                }
            } else if (window.pageYOffset > a.triggerOffset && a.$target.classList.contains(a.class)) {
                a.$target.classList.remove(a.class);
            }
        }
    }
}

window.addEventListener('resize', () => {
    for (let a of anims) {
        a.triggerOffset = a.$trigger.offsetTop;
    }
});

for (let a of anims) {
    a.$trigger = document.getElementById(a.trigger);
    a.$target = document.getElementById(a.target);
    a.triggerOffset = a.$trigger.offsetTop;
}

if (typeof window.IntersectionObserver == 'function') {
    for (let a of anims) {
        let observer = new IntersectionObserver(trigger.bind(null, true, a));
        observer.observe(a.$trigger);
    }
} else {
    window.addEventListener('scroll', trigger.bind(null, false), false);
}

trigger(false);
