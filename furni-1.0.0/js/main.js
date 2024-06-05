let loaded = (eventLoaded) => {

    window.alert("landing page loaded");
    console.log(eventLoaded);
    debugger;


    let myform = document.getElementById('formulario');
    debugger;

    myform.addEventListener('submit', (eventSubmit) => {
        eventSubmit.preventDefault()
        debugger;
        if (form_name.value.length == 0) {
            alert("Nombre requerido")
            form_name.focus()
            return;
        }

        const nombre = document.getElementById('form-name').value;
        const apellido = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('message').value;
        const datos = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            mensaje: mensaje
        };
        fetch('https://pokeapi-7a2d2-default-rtdb.firebaseio.com/collection', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(respuesta => respuesta.json())
            .then(datos => {
                console.log(datos); // Imprimir la respuesta del
                servidor
            })
            .catch(error => console.error(error));

    })

}

