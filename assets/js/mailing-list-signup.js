document.getElementById('ml-signup-form').addEventListener('submit', submitSignup, false);


function submitSignup(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    let status = document.getElementById('ml-signup-status'),
        email = document.getElementById('ml-email').value,
        submit = document.getElementById('ml-submit');

    submit.disabled = true;
    status.innerHTML = 'Submitting...';

    let xhr = new XMLHttpRequest;
    xhr.open('POST', e.target.action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    function logError() {
        status.innerHTML = 'An error occurred. Please try again later.';
        status.classList.add('has-text-danger');
        if (typeof _paq == 'object') {
            _paq.push(['trackEvent', 'Marketing', 'ListSignupError']);
        }
    }

    xhr.onerror = logError;
    xhr.onload = () => {
        if (xhr.status == 200) {
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
