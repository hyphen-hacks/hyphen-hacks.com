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
        status.innerHTML = 'An error occurred. Please try again later.';
        status.classList.add('has-text-danger', 'is-size-5');
        document.getElementById('list-signup-form').classList.add('list-signup-form-collapsed');
        if (typeof _paq == 'object') {
            _paq.push(['trackEvent', 'Marketing', 'ListSignupError']);
        }
    }

    xhr.onerror = logError;
    xhr.onload = () => {
        if (xhr.status == 200) {
            spinner.style.display = 'none';
            status.classList.add('has-text-success', 'is-size-5');
            status.innerHTML = 'You\'ve successfully been added to our mailing list. Thanks!';
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
