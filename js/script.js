
// USADO PARA TROCAR AS IMAGEMS DO PRODUTO, QUEM COMPRAR PODE VER A FRENTE, COSTA E LADOS DA CAMISA
const imagensSecundarias = document.querySelectorAll('.clickable');

imagensSecundarias.forEach(function(imagemSecundaria) {
    // FUNÇÃO CLICK PARA ADICIONAR UM EVENTO
  imagemSecundaria.addEventListener('click', function() {
    const imagemPrincipal = document.getElementById('imgpdt');
    // TROCAR A PRINCIPAL PELA OUTRA IMAGEM SELECIONADA
    imagemPrincipal.src = imagemSecundaria.src;
  });
});

// 
const botaoselecionar = document.getElementById('selecionar-botao');
const botaoselecionado = document.getElementById('selecionado');

fetch (`http://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia => {

    var dolar = economia.USDBRL.bid;

    var valorDolar = document.getElementsByClassName('valorDolar');

    for(x = 0; x <= valorDolar.length; x++){
      var calculo = valorDolar[x].innerHTML * dolar;
      document.getElementsByClassName('valorReal')[x].innerHTML = calculo.toFixed(2).replace('.', ',');
    }
  
})