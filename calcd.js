var valor;
var resultado;

function botao(num){
      valor= document.calcd.visor.value += num;
}

function reseta(){
    document.calcd.visor.value = '';
}
function calcula(){
    resultado=eval(valor);
    document.calcd.visor.value = resultado.toLocaleString('pt-BR');
}
