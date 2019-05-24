const navbarBurgers = Array.prototype.slice.call(document.getElementsByClassName('navbar-burger'), 0);

if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const targetId = el.dataset.target,
                target = document.getElementById(targetId);

            el.classList.toggle('is-active');
            target.classList.toggle('is-active');
        });
    });
}

const deleteButtons = document.querySelectorAll('.notification .delete');

if (deleteButtons.length > 0) {
    deleteButtons.forEach(el => {
        el.addEventListener('click', () => {
            el.parentNode.parentNode.removeChild(el.parentNode);
        });
    });
}

const modalCloseTargets = document.querySelectorAll('.modal-background, .modal-close');

if (modalCloseTargets.length > 0) {
    modalCloseTargets.forEach(el => {
        el.addEventListener('click', () => {
            el.parentNode.classList.remove('is-active');
        });
    })
}

const modalOpenTargets = document.getElementsByClassName('modal-opener');

if (modalOpenTargets.length > 0) {
    for (let el of modalOpenTargets) {
        el.addEventListener('click', () => {
            document.getElementById(el.dataset.targetModal).classList.add('is-active');
        });
    }
}
