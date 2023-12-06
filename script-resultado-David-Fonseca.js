function obtenerParametro(name) {
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        resultados = regex.exec(location.search);
    return resultados === null ? "" : decodeURIComponent(resultados[1]);
}

var Fonseca = obtenerParametro('Fonseca');
var Marin = obtenerParametro('Marin');
var educacion = obtenerParametro('educacion');
var ocupacion = obtenerParametro('ocupacion');

document.getElementById('resultado').innerHTML =
    '<p>Edad: ' + Fonseca + '</p>' +
    '<p>Sexo: ' + Marin + '</p>' +
    '<p>Nivel de Educación: ' + educacion + '</p>' +
    '<p>Ocupación: ' + ocupacion + '</p>';
