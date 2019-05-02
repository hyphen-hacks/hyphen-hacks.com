function popIn(id) {
    return {
        target: id,
        class: 'has-popped-in',
        threshold: 1,
        once: true
    }
}

scrollclass([
    {
        target: 'navbar',
        class: 'navbar-hidden',
        trigger: 'scroll-breakpoint',
        margin: '-96px'
    },
    popIn('recap-prizes'),
    popIn('recap-students'),
    popIn('recap-mentors'),
    popIn('learn'),
    popIn('connect'),
    popIn('grow')
]);
