function search() {
    // Obtener el valor ingresado por el usuario
    var searchTerm = document.querySelector('.box_search').value;
    
    // Realizar la búsqueda utilizando el término ingresado
    if (searchTerm) {
        // Enviar una solicitud al servidor usando fetch
        fetch(`/search?term=${encodeURIComponent(searchTerm)}`)
            .then(response => response.json())
            .then(data => {
                // Procesar los resultados de búsqueda
                console.log("Resultados de búsqueda:", data);
                // Aquí puedes mostrar los resultados en la página
                displayResults(data);
            })
            .catch(error => {
                console.error("Error en la búsqueda:", error);
            });
    } else {
        console.log("Ingrese un término de búsqueda.");
    }
}

function displayResults(results) {
    const resultsContainer = document.querySelector('.search-results');
    resultsContainer.innerHTML = ''; // Limpiar resultados previos
    
    if (results.length > 0) {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.textContent = result.name; // Mostrar el nombre o cualquier campo de los resultados
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.textContent = 'No se encontraron resultados.';
    }
}
