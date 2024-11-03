// Al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const seleccions = {
        listbox1: '',
        listbox2: '',
        listbox4: ''
    };

    // Función para verificar si están todos los listboxes seleccionados
    function checkSelections() {
        return seleccions.listbox1 && seleccions.listbox2 && seleccions.listbox4;
    }

    // Función para actualizar el valor seleccionado
    function handleSeleccion(event) {
        const listboxId = event.target.id;
        seleccions[listboxId] = event.target.value;

        // Habilitar botón de descarga cuando todas las selecciones estén listas
        if (checkSelections()) {
            document.getElementById("boton3").disabled = false;
        }
    }

    // Mostrar listbox al hacer clic en el botón
    function showListbox(id) {
        document.querySelectorAll('.listbox').forEach(listbox => listbox.style.display = 'none');
        document.getElementById(id).style.display = 'block';
    }

    // Funciones para mostrar/ocultar modelos específicos de marcas
    function updateListbox2() {
        const marcaListbox = document.getElementById('listbox2');
        marcaListbox.disabled = false;
    }

    function updateListbox4() {
        const soListbox = document.getElementById('listbox4');
        soListbox.disabled = false;
    }

    // Redirigir a la página de descargas
    function goToDownloadPage() {
        const params = new URLSearchParams(seleccions).toString();
        window.location.href = 'descargar.html?' + params;
    }

    // Event Listeners
    document.getElementById('boton1').addEventListener('click', () => showListbox('listbox1'));
    document.getElementById('boton2').addEventListener('click', () => showListbox('listbox2'));
    document.getElementById('boton4').addEventListener('click', () => showListbox('listbox4'));

    // Cada listbox maneja las selecciones
    document.getElementById('listbox1').addEventListener('change', handleSeleccion);
    document.getElementById('listbox2').addEventListener('change', handleSeleccion);
    document.getElementById('listbox4').addEventListener('change', handleSeleccion);

    // Botón de descarga
    document.getElementById("boton3").addEventListener("click", goToDownloadPage);
});


// JavaScript Document
/*document.addEventListener('DomContentLoader', function(){
    var seleccions = {
        listbox1:'',
        listbox2:'',
        listbox4:''
    };

    function checkSelections(){
        return seleccions.listbox1 && seleccions.listbox2  && seleccions.listbox4;
    }

    function handleSeleccion(event) {
        var listboxid = event.target.id;
        seleccions[listboxid] = event.target.value;

        if (checkSelections()) {
            var params = new URLSearchParams(seleccions).toString();
            window.location.href = 'result.html?' + params;
        }
    }
    
        //Listbox principales
    document.getElementById('boton1').addEventListener('click', function() {
        document.getElementById('listbox1').style.display = 'block';
    });
    document.getElementById('listbox1').addEventListener('change', handleSeleccion);

    document.getElementById('boton2').addEventListener('click', function() {
        document.getElementById('listbox2').style.display = 'block';
    });
    document.getElementById('listbox2').addEventListener('change', handleSeleccion);     
    
    document.getElementById('boton4').addEventListener('click', function() {
        document.getElementById('listbox4').style.display = 'block';
    });
    document.getElementById('listbox4').addEventListener('change', handleSeleccion);
    
});
     //Dispositivo
function listbox1() {
    const listbox1 = document.getElementById('listbox1');
    const computedStyle = window.getComputedStyle(listbox1);
    // Verifica si el listbox está visible
    if (computedStyle.display === 'none') {
        // Si está oculto, lo muestra
        listbox1.style.display = 'block';
    } else {
        // Si está visible, lo oculta
        listbox1.style.display = 'none';
    }
}
// JavaScript Document
		
		// PARA MARCA >>>
function listbox2() {
    const listbox2 = document.getElementById('listbox2');
    const computedStyle = window.getComputedStyle(listbox2);
    // Verifica si el listbox está visible
    if (computedStyle.display === 'none') {
        // Si está oculto, lo muestra
        listbox2.style.display = 'block';
    } else {
        // Si está visible, lo oculta
        listbox2.style.display = 'none';
    }
}// JavaScript Document
		
		
function showListbox(id) {   //muestra el modelo segun la categoria y sub-categoria
    // Hide all listboxes
    document.querySelectorAll('.listbox').forEach(function(listbox) {
        listbox.style.display = 'none';
    }); 
    // Show the selected listbox
    document.getElementById(id).style.display = 'block';
} 		
		//PARA SISTEMA 		
function listbox4() {
    const listbox4 = document.getElementById('listbox4');
    const computedStyle = window.getComputedStyle(listbox4);
    // Verifica si el listbox está visible
    if (computedStyle.display === 'none') {
        // Si está oculto, lo muestra
        listbox4.style.display = 'block';
    } else {
        // Si está visible, lo oculta
        listbox4.style.display = 'none';
    }
} */
			
			 
        