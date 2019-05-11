document.getElementById('ml-signup-form').addEventListener('submit', submitSignup, false);


function submitSignup(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    let status = document.getElementById('ml-signup-status'),
        consent = document.getElementById('ml-consent'),
        consentError = document.getElementById('consent-error-text'),
        email = document.getElementById('ml-email').value,
        emailError = document.getElementById('email-error-text'),
        submit = document.getElementById('ml-submit'),
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

    let xhr = new XMLHttpRequest;
    xhr.open('POST', e.target.action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    function logError() {
        status.innerHTML = 'An error occurred. Please try again later.';
        status.classList.add('is-danger');
        if (typeof _paq == 'object') {
            _paq.push(['trackEvent', 'Marketing', 'ListSignupError']);
        }
    }

    xhr.onerror = logError;
    xhr.onload = () => {
        if (xhr.status == 200) {
            status.classList.add('is-success');
            status.innerHTML = 'You\'ve successfully been added to our mailing list. Thanks!';
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
