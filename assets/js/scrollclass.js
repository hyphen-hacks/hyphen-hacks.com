function scrollclass(triggers) {
    let created = [];

    for (let t of triggers) {
        let target = t.target,
            className = t.class,
            threshold = t.hasOwnProperty('threshold') ? t.threshold : 0,
            trigger = t.hasOwnProperty('trigger') ? t.trigger : target,
            once = t.hasOwnProperty('once') ? t.once : false,
            alternateClass = t.hasOwnProperty('alternateClass') ? t.alternateClass : null,
            invert = t.hasOwnProperty('invert') ? t.invert : false,
            margin = t.hasOwnProperty('margin') ? t.margin : '0px',
            root = t.hasOwnProperty('root') ? t.root : null;

        if (typeof target == 'string') {
            target = document.getElementById(target);
        }

        if (typeof trigger == 'string') {
            trigger = document.getElementById(trigger);
        }

        if (typeof root == 'string') {
            root = document.getElementById(root);
        }

        let options = {
            root,
            threshold,
            rootMargin: margin
        };

        let observer = new IntersectionObserver((entries, observer) => {
            let entry = entries[0],
                shouldHaveClass = entry.isIntersecting && entry.intersectionRatio >= threshold;

            if (invert) {
                shouldHaveClass = !shouldHaveClass;
            }

            if (shouldHaveClass) {
                target.classList.add(className);
                target.classList.remove(alternateClass);

                if (once) {
                    observer.disconnect();
                }
            } else {
                target.classList.remove(className);
                if (alternateClass !== null) {
                    t.target.classList.add(alternateClass);
                }
            }
        }, options);

        observer.observe(trigger);
        created.push({
            observer,
            target,
            className,
            threshold,
            trigger,
            once,
            alternateClass,
            invert,
            margin,
            root
        });
    }

    return {
        disable() {
            for (let t of created) {
                t.observer.disconnect();
            }
        }
    }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
    module.exports = scrollclass;
}
