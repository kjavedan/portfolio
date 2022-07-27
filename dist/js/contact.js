
const btn = document.getElementById('btn');
btn.textContent = "Send Email";

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        btn.textContent = 'Sending...';

        const serviceID = 'service_zaezrsp';
        const templateID = 'template_8q5aj2i';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.textContent = 'Send Email';
                alert(JSON.stringify(err));
            });
    });
