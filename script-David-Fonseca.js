document.getElementById('encuestaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var Fonseca = document.getElementById('Fonseca').value;
    var Marin = document.getElementById('Marin').value;
    var educacion = document.getElementById('educacion').value;
    var ocupacion = document.getElementById('ocupacion').value;

    var url = 'resultado-David-Fonseca.html?Fonseca=' +
        encodeURIComponent(Fonseca) + '&Marin=' +
        encodeURIComponent(Marin) + '&educacion=' +
        encodeURIComponent(educacion) + '&ocupacion=' +
        encodeURIComponent(ocupacion);
    window.location.href = url;
});

