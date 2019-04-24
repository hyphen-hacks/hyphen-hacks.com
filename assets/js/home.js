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
    {
        target: 'mission-text',
        class: 'has-entered',
        threshold: 1,
        once: true
    },
    popIn('recap-prizes'),
    popIn('recap-students'),
    popIn('recap-mentors'),
    popIn('learn'),
    popIn('connect'),
    popIn('grow')
]);
