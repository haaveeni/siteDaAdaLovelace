document.getElementById("botao-enviar").addEventListener("click", validaFormulario)

function validaFormulario (){
  if (document.getElementById("nome").value != "" &&           document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
  alert("Prontinho! Você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos Nome, Email e Telefone!")
  }
}

var nome = prompt("Qual seu nome?")
alert (nome + ", bem-vindo(a)!")