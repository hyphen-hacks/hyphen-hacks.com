document.getElementById('list-signup-form').addEventListener('submit', submitSignup, false);

function submitSignup(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    let email = document.getElementById('list-signup-email').value,
        emailError = document.getElementById('email-error-text'),
        submit = document.getElementById('list-signup-submit'),
        notification = document.getElementById('list-signup-notification'),
        notificationText = document.getElementById('list-signup-notification-text'),
        modal = document.getElementById('list-signup-modal'),
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!(email.match(emailRegex))) {
        emailError.innerHTML = 'Please enter an email address.';
        return false;
    } else {
        emailError.innerHTML = '';
    }

    submit.disabled = true;
    submit.classList.add('is-loading');

    let xhr = new XMLHttpRequest;
    xhr.open('POST', e.target.action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    function logError() {
        document.getElementById('list-signup-error-container').classList.remove('is-invisible');
        if (typeof _paq == 'object') {
            _paq.push(['trackEvent', 'Marketing', 'ListSignupError']);
        }
    }

    xhr.onerror = logError;
    xhr.onload = () => {
        if (xhr.status == 200) {
            document.getElementById('list-signup-success-container').classList.remove('is-invisible');
            if (typeof _paq == 'object') {
                _paq.push(['trackEvent', 'Marketing', 'ListSignupSuccess']);
            }
        } else {
            logError();
        }
    };

    xhr.send('email=' + encodeURIComponent(email));

    return false;
}
