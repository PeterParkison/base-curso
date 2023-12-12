var Bruna = window.document.getElementById("bruna")
var Samantha = window.document.getElementById("samantha")
var Leonardo = window.document.getElementById("leonardo")
var SetaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Bruna.style ="display:none"
    Leonardo.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex"
}

function RolarParaEsquerda() {
    Bruna.style ="display:flex"
    Leonardo.style ="display:none"
    SetaDireita.style ="display:flex"
    SetaEsquerda.style ="display:none"
}