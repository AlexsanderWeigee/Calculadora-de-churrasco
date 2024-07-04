function calcularResul() {
    //let contHomens = querySelector('input').value;
    let quantidadeHomens = document.getElementById("homens").value;
    let quantidadeMulheres = document.getElementById("mulheres").value;
    let quantidadeCriancas = document.getElementById("criancas").value;

    let carneBovina = quantidadeHomens * 0.5 + quantidadeMulheres * 0.3 + quantidadeCriancas * 0.2;
    let frango = quantidadeHomens * 0.2 + quantidadeMulheres * 0.2 + quantidadeCriancas * 0.1;
    let linguica = quantidadeHomens * 0.2 + quantidadeMulheres * 0.2 + quantidadeCriancas * 0.2;
    let refrigerante = quantidadeHomens * 0.3 + quantidadeMulheres * 0.4 + quantidadeCriancas * 0.2;
    let cerveja = quantidadeHomens * 0.8 + quantidadeMulheres * 0.5;

    let resultadoHtml = "<h3>Quantidade necessaria por pessoas: </h3>";
    resultadoHtml += "<p> " + carneBovina.toFixed(2) + "Kg Carne bovina. </p>";
    resultadoHtml += "<p> " + frango.toFixed(2) + "Kg Carne de frango. </p>";
    resultadoHtml += "<p> " + linguica.toFixed(2) + "Kg de linguiça. </p>";
    resultadoHtml += "<p> " + refrigerante.toFixed(2) + "L de refrigerante. </p>";
    resultadoHtml += "<p> " + cerveja.toFixed(2) + "L de cerveja. </p>";

    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = resultadoHtml;
    divResultado.style.display = "block";
}