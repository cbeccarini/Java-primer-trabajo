var lista = []
function crearLista(){
    var listaNueva = []
    var palabra = prompt ("Ingrese una palabra: ");
    while (palabra != "Finalizar"){
        listaNueva.push(palabra);
        var palabra = prompt ("Ingrese una palabra: ");
    }
    return listaNueva
}


lista = crearLista();
alert(lista)
