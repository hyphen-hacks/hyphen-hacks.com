scrollclass([
    {
        target: 'navbar',
        class: 'navbar-hidden',
        trigger: 'scroll-breakpoint'
    },
    {
        target: 'mission-text',
        class: 'has-entered',
        threshold: 1,
        once: true
    },
    {
        target: 'recap-prizes',
        class: 'has-popped-in',
        threshold: 1,
        once: true
    },
    {
        target: 'recap-students',
        class: 'has-popped-in',
        threshold: 1,
        once: true
    },
    {
        target: 'recap-mentors',
        class: 'has-popped-in',
        threshold: 1,
        once: true
    }
]);
