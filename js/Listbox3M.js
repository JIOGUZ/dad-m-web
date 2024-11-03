//JS document
document.addEventListener('DOMContentLoaded', function () {
    var seleccions = {
        listbox3M: '',
        hp: '',
        Lenovo: '',
        Dell: '',
        Asus: '',
        Apple: ''
    };

    function checkSeleccions() {
        return seleccions.listbox3M && seleccions.hp && seleccions.Lenovo && seleccions.Dell && seleccions.Asus && seleccions.Apple;
    }

    function handleSelection(event) {
        var listboxId = event.target.id;
        seleccions[listboxId] = event.target.value;

        if (checkSeleccions()) {
            let params = new URLSearchParams(seleccions).toString();
            window.location.href = 'result.html?' + params;
        }
    }

    document.getElementById('boton3').addEventListener('click', function() {
        document.getElementById('listbox3M').style.display = 'block';
    });
    document.getElementById('listbox3M').addEventListener('change', handleSelection);

    // Listbox Secundarias o dependientes
    document.getElementById('boton3').addEventListener('click', function() {
        document.getElementById('hp').style.display = 'block';
    });
    document.getElementById('hp').addEventListener('change', handleSelection);

    document.getElementById('boton3').addEventListener('click', function() {
        document.getElementById('Lenovo').style.display = 'block';
    });
    document.getElementById('Lenovo').addEventListener('change', handleSelection);

    document.getElementById('boton3').addEventListener('click', function() {
        document.getElementById('Dell').style.display = 'block';
    });
    document.getElementById('Dell').addEventListener('change', handleSelection);

    // Listbox independientes o sublist
    document.getElementById('boton3').addEventListener('click', function() {
        document.getElementById('Asus').style.display = 'block';
    });
    document.getElementById('Asus').addEventListener('change', handleSelection);

    document.getElementById('boton3').addEventListener('click', function() {
        document.getElementById('Apple').style.display = 'block';
    });
    document.getElementById('Apple').addEventListener('change', handleSelection);

    // PARA MODELO
    function listbox3() {
        const listbox3 = document.getElementById('listbox3');
        const computedStyle = window.getComputedStyle(listbox3);
        
        // Verifica si el listbox está visible
        if (computedStyle.display === 'none') {
            listbox3.style.display = 'block';
        } else {
            listbox3.style.display = 'none';
        }
    }
});


// hp
function Hp() {
    const Hp = document.getElementById('Hp');
    const computedStyle = window.getComputedStyle(Hp);
    if (computedStyle.display === 'none') {
        Hp.style.display = 'block';
    } else {
	Hp.style.display = 'none';
    }
}

// Lenovo
function Lenovo() {
    const Lenovo = document.getElementById('Lenovo');
    const computedStyle = window.getComputedStyle(Lenovo);
    if (computedStyle.display === 'none') {
        Lenovo.style.display = 'block';
    } else {
        Lenovo.style.display = 'none';
    }
}

//sub-Lenovo
function subLenovo() {
    const subLenovo = document.getElementById('sub-Lenovo');
    const computedStyle = window.getComputedStyle(subLenovo);
    if (computedStyle.display === 'none') {
        subLenovo.style.display = 'block';
    } else {
        subLenovo.style.display = 'none';
    }
}


// Dell
function Dell() {
    const Dell = document.getElementById('Dell');
    const computedStyle = window.getComputedStyle(Dell);
    if (computedStyle.display === 'none') {
        Dell.style.display = 'block';
    } else {
        Dell.style.display = 'none';
    }
}

// Asus
function Asus() {
    const Asus = document.getElementById('Asus');
    const computedStyle = window.getComputedStyle(Asus);
    if (computedStyle.display === 'none') {
        Asus.style.display = 'block';
    } else {
        Asus.style.display = 'none';
    }
}

// Apple
function Apple() {
    const Apple = document.getElementById('Apple');
    const computedStyle = window.getComputedStyle(Apple);
    if (computedStyle.display === 'none') {
        Apple.style.display = 'block';
    } else {
        Apple.style.display = 'none';
    }
}
