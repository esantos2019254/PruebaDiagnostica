let valorPantalla = "";

function limpiarPantalla(){
    valorPantalla = "";
    actualizarPantalla();
}

function agregarCaracter(char){
    valorPantalla += char;
    actualizarPantalla();
}

function actualizarPantalla(){
    document.getElementById('pantalla').value = valorPantalla;
}

function calcular(){
    try {
        valorPantalla = eval(valorPantalla).toString();
        actualizarPantalla();
    } catch (error) {
        valorPantalla = 'Error!!';
        actualizarPantalla();
    }
}
