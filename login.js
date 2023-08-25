var login = document.querySelector("#login-input");
var senha = document.querySelector("#senha-input");
var loginButton = document.querySelector("#buttonLogin");

// Mensagens de erro
var loginInvalido = document.getElementById("login-invalido");
var loginInvalidoCaracteres = document.getElementById("login-invalido1");
var senhaInvalida = document.getElementById("senha-invalida");

// Função para exibir mensagem de erro no campo de login
function ativarLoginInvalido() {
  loginInvalido.style.display = "flex";
}

function ativarLoginInvalidoCaracteres() {
    loginInvalidoCaracteres.style.display = "flex";
}

// Função para exibir mensagem de erro no campo de senha
function ativarSenhaInvalida() {
  senhaInvalida.style.display = "flex";
}

// Função para ocultar todas as mensagens de erro
function desativarMensagensErro() {
  loginInvalido.style.display = "none";
  loginInvalidoCaracteres.style.display = "none";
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

function ativarLoginInvalidoCaracteresParametros() {

  if (login.value.length > 8 && login.value.length != 0) {
    ativarLoginInvalidoCaracteres();
    return true;
  }

  if (login.value.length < 5 && login.value.length != 0) {
    ativarLoginInvalidoCaracteres();
    return true;
  }

  return false;
}

ativarLoginInvalidoCaracteresParametros()

  // se os campos estiverem preenchidos, alerta "BEM-VINDO"//

  if (senha.value != "" && login.value != "" && ativarLoginInvalidoCaracteresParametros() == false) {
    alert("Bem-Vindo");
  }
});