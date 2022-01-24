/* base64
var textArea =("Eliane");
var b64 = btoa (textArea);
var unCode = atob (b64);
console.log(b64);
console.log(unCode);
*/

var textArea = document.querySelector('#digite');
var resposta = document.querySelector('#codificado');

function codificar(){
    var teste = textArea.value;
    var b64 = btoa(teste);
    resposta.textContent=b64;
}

function decodificar(){
    var teste = textArea.value;
    var base = atob(teste);
    resposta.textContent=base;
}

function apagar(){
    document.getElementById('digite').value = '';
    document.getElementById('codificado').value = '';
}



// cifra de cesar


