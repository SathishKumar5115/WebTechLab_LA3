function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const dobInput = document.getElementById('ddmmyy');
    const ageInput = document.getElementById('age');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const passwordInput = document.getElementById('formpassword');
    const timeInput = document.getElementById('formtime');
    const email = document.getElementById('mail').value;

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
    }

    if (dobInput.value === '') {
        alert('Please enter your date of birth.');
        dobInput.focus();
        return;
    }

    if (parseInt(ageInput.value) <= 0 || ageInput.value === '') {
        alert('Please enter a valid age.');
        ageInput.focus();
        return;
    }

    let isGenderSelected = false;
    genderInputs.forEach((genderInput) => {
        if (genderInput.checked) {
            isGenderSelected = true;
        }
    });
    if (!isGenderSelected) {
        alert('Please select a gender.');
        return;
    }
    if (email.trim() === '') {
        alert('Please enter your email.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (passwordInput.value.trim() === '') {
        alert('Please enter a password.');
        passwordInput.focus();
        return;
    }

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,16}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        alert('Password must be 8-16 characters long, contain at least one uppercase letter, one lowercase letter, and one special character.');
        passwordInput.focus();
        return;
    }


    if (timeInput.value === '') {
        alert('Please enter a time.');
        timeInput.focus();
        return;
    }


    if (confirm('Are you sure you want to submit this form?')) {
        document.getElementById('your-info').submit();

    }

}

const form = document.getElementById('your-info');
form.addEventListener('submit', validateForm);