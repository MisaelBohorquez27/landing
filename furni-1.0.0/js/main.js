let loaded = (eventLoaded) => {

    let myform = document.getElementById("contact-form");

    myform.addEventListener("submit", (eventSubmit) => {
        eventSubmit.preventDefault();

        let nameValue = document.getElementById('form_name').value;
        let emailValue = document.getElementById('form_email').value;
        let issueValue = document.getElementById('form_issue').value;
        let comboValue = document.getElementById('form_city').value;

        let valid = true;

        // Limpiar mensajes de error
        document.getElementById('error-name').textContent = '';
        document.getElementById('error-email').textContent = '';
        document.getElementById('error-issue').textContent = '';
        document.getElementById('error-city').textContent = '';

        // Validación del input nombre
        if (nameValue.length == 0) {
            document.getElementById('form_name').focus();
            document.getElementById('error-name').textContent = 'Ingrese un nombre válido';
            valid = false;
        }

        // Validación del input email
        if (emailValue.length == 0) {
            document.getElementById('form_email').focus();
            document.getElementById('error-email').textContent = 'Ingrese un email válido';
            valid = false;
        } else if (!emailValue.includes('@')) {
            document.getElementById('form_email').focus();
            document.getElementById('error-email').textContent = 'Ingrese un email con un formato válido';
            valid = false;
        }

        // Validación del input issue
        if (issueValue.length == 0) {
            document.getElementById('form_issue').focus();
            document.getElementById('error-issue').textContent = 'Describa el problema';
            valid = false;
        }

        // Validación del combo box
        if (comboValue == 'ciudad') {
            document.getElementById('form_city').focus();
            document.getElementById('error-city').textContent = 'Seleccione una ciudad';
            valid = false;
        }

        // Si todas las validaciones son correctas, se puede enviar el formulario
        if (valid) {
            alert("Formulario enviado exitosamente!");
            myform.submit();
        }
    });
};

window.addEventListener("DOMContentLoaded", loaded);
