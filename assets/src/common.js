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