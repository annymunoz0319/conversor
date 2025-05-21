function convertir() {

    let centigrados = Number(document.getElementById("centigrados").value)
    let Kelvin = (centigrados + 273.15).toFixed(2)
    let Farenheit = ((centigrados * 9) / 5 + 32).toFixed(2)
    let rankine = (((centigrados + 273.15) * 9) / 5).toFixed(2)
    let reaumur = ((centigrados * 4) / 5).toFixed(2)


    document.getElementById("kelvin").innerHTML = "Grados Kelvin " + Kelvin
    document.getElementById("farenheit").innerHTML = "Grados Farenheit " + Farenheit
    document.getElementById("rankine").innerHTML = "Grados Rankine " + rankine
    document.getElementById("reaumur").innerHTML = "Grados Reaumur " + reaumur

    console.log(convertir)


}