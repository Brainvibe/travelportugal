//loading carousel and settings


$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 60,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.custom-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
});


//Function To Display Popup
function div_show() {
    document.getElementById('contact-container').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('contact-container').style.display = "none";
}

function sendEmail(contactForm) {
    emailjs.send('gmail', 'travel_portugal', {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "information_feedback": contactForm.FormControlText.value
        })
        .then(
            function (response) {

                
                alert("Thank you for your message.");
                div_hide();
            },
            function (error) {
                
                alert("Please try again.");
            }
        );
    return false;
}