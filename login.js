var login = document.querySelector("#login-input");
var senha = document.querySelector("#senha-input");
var loginButton = document.querySelector("#buttonLogin");

// Mensagens de erro
var loginInvalido = document.getElementById("login-invalido");
var senhaInvalida = document.getElementById("senha-invalida");

// Função para exibir mensagem de erro no campo de login
function ativarLoginInvalido() {
  loginInvalido.style.display = "flex";
}

// Função para exibir mensagem de erro no campo de senha
function ativarSenhaInvalida() {
  senhaInvalida.style.display = "flex";
}

// Função para ocultar todas as mensagens de erro
function desativarMensagensErro() {
  loginInvalido.style.display = "none";
  senhaInvalida.style.display = "none";
}

// Evento de clique no botão de login
loginButton.addEventListener("click", function(event) {
  event.preventDefault(); // Impede o comportamento padrão de recarregar a página

  desativarMensagensErro(); // Oculta as mensagens de erro antes de validar novamente

  if (login.value === "") {
    ativarLoginInvalido();
  }

  if (senha.value === "") {
    ativarSenhaInvalida();
  }

  // se os campos estiverem preenchidos, alerta "BEM-VINDO"//

  if (senha.value != "" && login.value != "") {
    alert("Bem-Vindo");
  }
});