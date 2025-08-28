function convert() {
    let celsius = +document.getElementById("celsius").value;
    let farenheit = (9 * celsius / 5) + 32;
    document.getElementById("result").innerHTML = "Result: " + farenheit;
}