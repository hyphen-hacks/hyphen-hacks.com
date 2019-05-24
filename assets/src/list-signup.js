document.getElementById('list-signup-form').addEventListener('submit', submitSignup, false);

function submitSignup(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    let status = document.getElementById('list-signup-status'),
        consent = document.getElementById('list-signup-consent'),
        consentError = document.getElementById('consent-error-text'),
        email = document.getElementById('list-signup-email').value,
        emailError = document.getElementById('email-error-text'),
        submit = document.getElementById('list-signup-submit'),
        spinner = document.getElementById('list-signup-submit-spinner'),
        notification = document.getElementById('list-signup-notification'),
        notificationText = document.getElementById('list-signup-notification-text'),
        modal = document.getElementById('list-signup-modal'),
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!consent.checked) {
        consentError.innerHTML = 'In order to sign up for our mailing list, you must agree to receive email from us.';
        return false;
    } else {
        consentError.innerHTML = '';
    }

    if (!(email.match(emailRegex))) {
        emailError.innerHTML = 'Please enter an email address.';
        return false;
    } else {
        emailError.innerHTML = '';
    }

    submit.disabled = true;
    status.innerHTML = 'Submitting...';
    spinner.style.display = 'inline-flex';

    let xhr = new XMLHttpRequest;
    xhr.open('POST', e.target.action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    function logError() {
        console.log(xhr);
        spinner.style.display = 'none';
        status.innerHTML = '';
        notificationText.innerHTML = 'An error occurred. Please try again later.';
        notification.classList.remove('is-hidden');
        notification.classList.add('is-danger');
        document.getElementById('list-signup-form').classList.add('list-signup-form-collapsed');
        modal.classList.remove('is-active');
        if (typeof _paq == 'object') {
            _paq.push(['trackEvent', 'Marketing', 'ListSignupError']);
        }
    }

    xhr.onerror = logError;
    xhr.onload = () => {
        if (xhr.status == 200) {
            spinner.style.display = 'none';
            status.innerHTML = '';
            notificationText.innerHTML = 'You&apos;ve successfully been added to our mailing list. Thanks!';
            notification.classList.remove('is-hidden');
            notification.classList.add('is-success');
            modal.classList.remove('is-active');
            document.getElementById('list-signup-form').classList.add('list-signup-form-collapsed');
            if (typeof _paq == 'object') {
                _paq.push(['trackEvent', 'Marketing', 'ListSignupSuccess']);
            }
        } else {
            console.log(xhr.status);
            logError();
        }
    };

    xhr.send('email=' + encodeURIComponent(email));

    return false;
}
