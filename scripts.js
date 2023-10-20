Vue.component('slogan', {
    template: '<h1>Dive into Adventure with Splashes!</h1>'
});

var vm1 = new Vue({
    el: '.hero'
});


// Custom scripts for Splashes Home Page interactions

$(document).ready(function () {
    // Initialize Bootstrap components
    $('.carousel').carousel();

    // Smooth scrolling for in-page navigation
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Focus on child's name input field when registration modal is opened
    $('#registerModal').on('shown.bs.modal', function () {
        $('#childName').trigger('focus');
    });

    // Simple form validation for registration form
    $('#registerModal form').on('submit', function (e) {
        e.preventDefault();
        var isValid = true;
        $(this).find('input[required]').each(function () {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        if (isValid) {
            // Here, you can add the code to submit the form to your server.
            alert('Registration Successful!');
            $('#registerModal').modal('hide');
        }
    });
});
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation and Confirmation Message
document.querySelector('.registration form').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    const inputs = this.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (isValid) {
        alert('Thank you for registering! We will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

