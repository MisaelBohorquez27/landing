function validateForm() {
    let formName = document.getElementById('form_name');
    let formEmail = document.getElementById('form_email');
    let formIssue = document.getElementById('form_issue');
    let formCiudad = document.getElementById('form_ciudad');
    let combo2 = document.getElementById('combo2');
    let formMessage = document.getElementById('form_message');

    let valid = true;

    // Limpiar mensajes de error
    document.getElementById('error-name').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-issue').textContent = '';
    document.getElementById('error-ciudad').textContent = '';
    document.getElementById('error-combo2').textContent = '';
    document.getElementById('error-message').textContent = '';

    if (formName.value.trim() === '') {
        document.getElementById('error-name').textContent = 'Ingrese un nombre válido';
        valid = false;
    }

    if (formEmail.value.trim() === '' || !isValidEmail(formEmail.value)) {
        document.getElementById('error-email').textContent = 'Ingrese un email válido';
        valid = false;
    }

    if (formIssue.value.trim() === '') {
        document.getElementById('error-issue').textContent = 'Describa el problema';
        valid = false;
    }

    if (formCiudad.value.trim() === '') {
        document.getElementById('error-ciudad').textContent = 'Seleccione una ciudad';
        valid = false;
    }

    if (combo2.value.trim() === '') {
        document.getElementById('error-combo2').textContent = 'Seleccione un producto';
        valid = false;
    }

    if (formMessage.value.trim() === '') {
        document.getElementById('error-message').textContent = 'Ingrese detalles adicionales';
        valid = false;
    }

    return valid;
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function submitForm(eventSubmit) {
    eventSubmit.preventDefault();

    if (!validateForm()) {
        return;
    }

    let formData = {
        name: document.getElementById('form_name').value,
        email: document.getElementById('form_email').value,
        issue: document.getElementById('form_issue').value,
        city: document.getElementById('form_ciudad').value,
        product: document.getElementById('combo2').value,
        message: document.getElementById('form_message').value
    };

    let firebaseUrl = 'https://landingdatabase-default-rtdb.firebaseio.com/Collection.json';

    fetch(firebaseUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Formulario enviado exitosamente');
        document.getElementById('contact-form').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario');
    });
}

function loaded(eventLoaded) {
    console.log(eventLoaded);

    let myform = document.getElementById('contact-form');
    if (myform) {
        myform.addEventListener('submit', submitForm);
    } else {
        console.error('El formulario con id "contact-form" no se encontró en el DOM');
    }
}

window.addEventListener("DOMContentLoaded", loaded);
