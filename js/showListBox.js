// Restablecer el contenido dinámico y botones al recargar la página
window.onload = function() {
    resetForm();
};

// Función para restablecer el formulario
function resetForm() {
    document.getElementById("boton2").disabled = true;
    document.getElementById("boton4").disabled = true;
    document.getElementById("boton3").disabled = true;
    document.getElementById("listbox2").style.display = 'none';
    document.getElementById("listbox4").style.display = 'none';
    document.getElementById("contenidoDinamico").innerHTML = ''; // Vaciar contenido dinámico
}

// Mostrar lista desplegable correspondiente
function showListbox(listboxId) {
    const listbox = document.getElementById(listboxId);
    if (listbox) {
        listbox.style.display = 'block'; // Muestra la lista desplegable
    }
}

// Actualizar contenido al seleccionar dispositivo
function updateListbox2() {
    const dispositivoSeleccionado = document.getElementById("listbox1").value;
    const contenidoDinamico = document.getElementById("contenidoDinamico");

    // Generar contenidoDinamico basado en el dispositivo seleccionado
    let contenidoHtml = '';

    switch (dispositivoSeleccionado) {
        case 'Pc':
            contenidoHtml = '<p>Has seleccionado un PC.</p>';
            break;
        case 'Tablet':
            contenidoHtml = '<p>Has seleccionado una Tablet.</p>';
            break;
        case 'Movil':
            contenidoHtml = '<p>Has seleccionado un Móvil.</p>';
            break;
        case 'Portatil':
            contenidoHtml = '<p>Has seleccionado un Portátil.</p>';
            break;
        case 'Board':
            contenidoHtml = '<p>Has seleccionado una Board.</p>';
            break;
        default:
            contenidoHtml = '<p>Por favor, selecciona un dispositivo.</p>';
            break;
    }

    // Actualizar el contenido del Div
    contenidoDinamico.innerHTML = contenidoHtml;

    // Habilitar el botón de marca y mostrar la lista desplegable de marcas
    document.getElementById("boton2").disabled = false;
    showListbox('listbox2');
}

// Actualizar contenido de marca basado en la selección anterior
function updateListbox4() {
    const marcaSeleccionada = document.getElementById("listbox2").value;
    if (marcaSeleccionada) {
        // Habilitar el botón para seleccionar Sistema Operativo
        document.getElementById("boton4").disabled = false;
        showListbox('listbox4');
    }
}

// Habilitar el botón de descarga después de seleccionar el S.O.
function updateListbox3M() {
    const soSeleccionado = document.getElementById("listbox4").value;

    if (soSeleccionado) {
        // Habilitar el botón para ir a la página de descargas
        document.getElementById("boton3").disabled = false;
    }
}

// Redirigir a la página de descargas
function goToDownloadPage() {
    window.location.href = "descargas.html";  // Ajusta el URL de la página de descargas
}


/*//restablecer pagina F5 y volver al inicio
windows.onload = function() {
    resetForm();
};
//funcion restalecer formulario
function resetForm() {
    document.getElementById("boton2").disabled = true;
    document.getElementById("boton4").disabled = true;
    document.getElementById("boton3").disabled = true;
    document.getElementById("listbox2").style.display = 'none';
    document.getElementById("listbox4").style.display = 'none';
    document.getElementById("contenidoDinamico").innerHTML = '';
}

//Mostrar lista correspondiente
function showListbox(listboxId) {
    const listbox = document.getElementById(listboxId);
    if (listbox) {
        listbox.style.display = 'block' //Muestra la lista
    }
}

//Actualizar contenido al seleccionar Dispositivo
function updateListbox2() {
    const dispositivoSeleccionado = document.getElementById("listbox").value;

}

// Mostrar lista correspondiente desplegable
/*function showListbox(listboxId) {
    const listbox = document.getElementById(listboxId);
    if (listbox) {
        listbox.style.display = 'block'; // Muestra la lista desplegable
    }
}


// Actualizar contenido de --Busqueda-- al seleccionar dispositivo
function updateListbox2() {
    const dispositivoSeleccionado = document.getElementById("listbox1").value;
    const contenidoDinamico = document.getElementById("contenidoDinamico");  // id en index

    // Generar contenidoDinamico basado en el dispositivo seleccionado
    let contenidoHtml = '';

    switch (dispositivoSeleccionado) {
        case 'Pc':
            contenidoHtml = '<p>Has seleccionado un PC.</p>';
            break;
        case 'Tablet':
            contenidoHtml = '<p>Has seleccionado una Tablet.</p>';
            break;
        case 'Movil':
            contenidoHtml = '<p>Has seleccionado un Móvil.</p>';
            break;
        case 'Portatil':
            contenidoHtml = '<p>Has seleccionado un Portátil.</p>';
            break;
        case 'Board':
            contenidoHtml = '<p>Has seleccionado una Board.</p>';
            break;
        default:
            contenidoHtml = '<p>Por favor, selecciona un dispositivo.</p>';
            break;
    }

    // Actualizar el contenido del Div
    contenidoDinamico.innerHTML = contenidoHtml;

    // Habilitar el siguiente botón para la siguiente selección
    document.getElementById("boton2").disabled = false;
    showListbox('listbox2');
}

// Actualizar contenido de marca basado en la selección anterior
function updateListbox4() {
    const marcaSeleccionada = document.getElementById("listbox2").value;
    if (marcaSeleccionada){
        //habilitar boton para seleccionar S.O.
        document.getElementById("boton4").disabled = false;
        showListbox('listbox4');
    }

    // Habilitar boton descargas despues de seleccionar el S:O
    function updateListbox3M(){
        const soSeleccionado = document.getElementById("listbox4").value;

        if (soSeleccionado) {
            //Habilitar boton e ir a pagina de descargas
            document.getElementById("boton3").disabled = false;
        }
    }

    //redirigir a la pagina de descargas
    function goToDownloadPage() {
        window.location.href = "descargas.html";
    }

    //const contenidoDinamico = document.getElementById("contenidoDinamico");  // id en index
     
    /* Generar contenidoDinamico basado en la marca seleccionada
    let contenidoHtml = '';

    switch (marcaSeleccionada) {
        case 'Hp':
            contenidoHtml = '<p>Has seleccionado HP.</p>';
            break;
        case 'Lenovo':
            contenidoHtml = '<p>Has seleccionado Lenovo.</p>';
            break;
        case 'Dell':
            contenidoHtml = '<p>Has seleccionado Dell.</p>';
            break;
        case 'Asus':
            contenidoHtml = '<p>Has seleccionado Asus.</p>';
            break;
        case 'Apple':
            contenidoHtml = '<p>Has seleccionado Apple.</p>';
            break;
        default:
            contenidoHtml = '<p>Por favor, selecciona una marca.</p>';
            break;
    } 

    // Actualizar el contenido del Div
    contenidoDinamico.innerHTML = contenidoHtml;

    // Habilitar el siguiente botón para la siguiente selección
    document.getElementById("boton4").disabled = false;
} */
