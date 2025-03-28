// Optional: Add interactivity to service cards
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('click', function() {
        alert('Service card clicked!');
      });
    });
    // form validation code start

        // Automatically open the modal after 2 seconds
        setTimeout(function() {
            document.getElementById('formModal').style.display = 'flex';
        }, 1000);

        // Close the modal when clicking on the close button
        document.querySelector('#form_close').addEventListener('click', function() {
            document.getElementById('formModal').style.display = 'none';
        });

        // Close the modal when clicking outside the modal
        // window.addEventListener('click', function(event) {
        //     if (event.target === document.getElementById('formModal')) {
        //         document.getElementById('formModal').style.display = 'none';
        //     }
        // });

        // Form validation
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            let name = document.getElementById('name').value.trim();
            let email = document.getElementById('email').value.trim();
            let phone = document.getElementById('phone').value.trim();
            let state = document.getElementById('state').value;
            let message = document.getElementById('message').value.trim();

            if (name === '') {
                alert('Please enter your name.');
                return;
            }

            if (email === '') {
                alert('Please enter your email.');
                return;
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (phone === '') {
                alert('Please enter your phone number.');
                return;
            } else if (!validatePhone(phone)) {
                alert('Please enter a valid phone number.');
                return;
            }

            if (state === '') {
                alert('Please select your state.');
                return;
            }

            if (message === '') {
                alert('Please enter your message.');
                return;
            }

            alert('Form submitted successfully!');
            document.getElementById('formModal').style.display = 'none'; // Close the modal after submission
            // You can add code here to submit the form data to a server
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        function validatePhone(phone) {
            const re = /^\d{10}$/;
            return re.test(String(phone));
        }



    // form validation code end



