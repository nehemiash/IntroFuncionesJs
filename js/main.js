function mostrarFechaHora() {
    var hoy = new Date();

    hoy = hoy.toLocaleString();

    alert(`La fecha y Hora actual es: ${hoy}`);
}

function convertirGrados() {
    var celsius = document.getElementById("gradoCelsius").value;

    var fahrenheit = (celsius * 9) / 5 + 32;

    alert(fahrenheit + " °F");
}

function vidaEnNumeros() {
    var dia = document.getElementById("diaNacimiento").value;
    var mes = document.getElementById("mesNacimiento").value;
    var anio = document.getElementById("anioNacimiento").value;

    var esteAnio = new Date().getFullYear();

    var anios = esteAnio - anio;
    var meses = anios * 12;
    var dias = meses * 30;
    var horas = dias * 24;
    var minutos = horas * 60;
    var segundos = minutos * 60;

    var factor = 0.33;

    var horasDurmiendo = horas * factor;
    var diasDurmiendo = dias * factor;
    var mesesDurmiendo = meses * factor;
    var aniosDurmiendo = anios * factor;

    var aleatorio = Math.random() * 10;

    aleatorio = aleatorio.toPrecision(2);

    alert(`Fecha de Nacimiento: ${dia}/${mes}/${anio}
    Han pasado...
    ${anios} años
    ${meses} meses
    ${dias} dias
    ${horas} horas
    ${minutos} minutos
    ${segundos} segundos
    Y te quedan ${aleatorio} años de vida.

    Tambien has estado durmiendo por:
    ${horasDurmiendo} horas
    ${diasDurmiendo} dias
    ${mesesDurmiendo} meses
    ${aniosDurmiendo} años en brazos de Morfeo.

    `);
}