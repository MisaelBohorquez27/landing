let loaded = (eventLoaded) => {

    window.alert("landing page loaded");
    console.log(eventLoaded);
    debugger;


    let myform = document.getElementById('<identificador-del-formulario>');
    debugger;

    myform.addEventListener('submit', (eventSubmit) => {
        debugger;
    })
}

window.addEventListener("DOMContentLoaded", loaded);

