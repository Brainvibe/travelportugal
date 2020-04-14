function sendEmail(contactForm) {
    emailjs.send('gmail', 'travel_portugal', {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "information_feedback": contactForm.FormControlText.value
        })
        .then(
            function (response) {

                console.log('SUCCESS!', response.status, response.text);
            },
            function (error) {
                console.log('FAILED...', error);
            }
        );
    return false;
}