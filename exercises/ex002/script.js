function ValorDolar(){
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmReal = parseFloat(valor)
    console.log(valorEmReal)
    let valorEmDolar = valorEmReal / 5;
    console.log(valorEmDolar)
    let elementoValorConvertido = document.getElementById("valorConvertido")
    let valorConvertido = "O valor em Dólar é US" + valorEmDolar.toLocaleString('en-US', {style:'currency', currency:'USD'});
    elementoValorConvertido.innerHTML = valorConvertido;
}
function ValorEuro(){
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmReal = parseFloat(valor)
    console.log(valorEmReal);
    let valorEmEuro = valorEmReal / 5.54;
    console.log(valorEmEuro);
    let elementoValorConvertido = document.getElementById("valorConvertido")
    let valorConvertido = "O valor em Euro é EUR" + valorEmEuro.toLocaleString('fr-FR', {style: 'currency', currency:'EUR'});
    elementoValorConvertido.innerHTML = valorConvertido
}