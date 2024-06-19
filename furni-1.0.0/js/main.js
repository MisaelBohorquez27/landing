let loaded = (eventLoaded) => {

    let myform = document.getElementById("contact-form");

    myform.addEventListener("submit", (eventSubmit) => {

        eventSubmit.preventDefault();

        let nameValue = document.getElementById('form_name').value;
        let emailValue = document.getElementById('form_email').value;
        let issueValue = document.getElementById('form_issue').value;
        let ciudadValue = document.getElementById('form_ciudad').value;
        let combo2Value = document.getElementById('combo2').value;
        let messageValue = document.getElementById('form_message').value;

        let valid = true;

        // Limpiar mensajes de error
        document.getElementById('error-name').textContent = '';
        document.getElementById('error-email').textContent = '';
        document.getElementById('error-issue').textContent = '';
        document.getElementById('error-combo1').textContent = '';
        document.getElementById('error-combo2').textContent = '';
        document.getElementById('error-message').textContent = '';

        // Validación del input nombre
        if (nameValue.length === 0) {
            document.getElementById('error-name').textContent = 'Ingrese un nombre válido';
            valid = false;
        }

        // Validación del input email
        if (emailValue.length === 0) {
            document.getElementById('error-email').textContent = 'Ingrese un email válido';
            valid = false;
        } else if (!emailValue.includes('@')) {
            document.getElementById('error-email').textContent = 'Ingrese un email con un formato válido';
            valid = false;
        }

        // Validación del input issue
        if (issueValue.length === 0) {
            document.getElementById('error-issue').textContent = 'Describa el problema';
            valid = false;
        }

        // Validación del combo box 1
        if (combo1Value === '') {
            document.getElementById('error-ciudad').textContent = 'Seleccione una ciudad';
            valid = false;
        }

        // Validación del combo box 2
        if (combo2Value === '') {
            document.getElementById('error-combo2').textContent = 'Seleccione un producto';
            valid = false;
        }

        // Validación del mensaje
        if (messageValue.length === 0) {
            document.getElementById('error-message').textContent = 'Ingrese detalles adicionales';
            valid = false;
        }

        // Si todas las validaciones son correctas, se puede enviar el formulario
        if (valid) {

            alert("Formulario enviado exitosamente!");

            const datos = {
                name: nameValue,
                email: emailValue,
                issue: issueValue,
                city: ciudadValue,
                product: combo2Value,
                message: messageValue
            };
    
            fetch('https://landingdatabase-default-rtdb.firebaseio.com/Collection.json', {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(respuesta => respuesta.json())
            .then(datos => {
                console.log(datos); // Imprimir la respuesta del servidor
                alert("Formulario enviado exitosamente!");
                // Restablecer el formulario
                myform.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Hubo un error al enviar el formulario.");
            });
        }
    });

};

window.addEventListener("DOMContentLoaded", loaded);
