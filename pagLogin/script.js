// Função para alternar entre login e registro
function toggleForm() {
  const loginForm = document.querySelector(".login-container form")
  const registerForm = document.getElementById("register-form")
  const loginButton = document.querySelector(".login-container button")

  // Alternar entre mostrar o formulário de login e o formulário de registro
  if (loginForm.classList.contains("hidden")) {
    // Exibir o formulário de login e ocultar o formulário de registro
    loginForm.classList.remove("hidden")
    registerForm.classList.add("hidden")
    loginButton.textContent = "Ir para Registro"
  } else {
    // Exibir o formulário de registro e ocultar o formulário de login
    loginForm.classList.add("hidden")
    registerForm.classList.remove("hidden")

    // Limpar os campos do formulário de registro ao alternar para o registro
    clearRegisterFields()
  }
}

// Função para limpar os campos do formulário de registro
function clearRegisterFields() {
  document.getElementById("first-name").value = ""
  document.getElementById("last-name").value = ""
  document.getElementById("email").value = ""
  document.getElementById("dob").value = ""
  document.getElementById("phone").value = ""
  document.getElementById("cpf").value = ""
}

// Função para voltar ao login
function toggleForm2() {
  const loginForm = document.querySelector(".login-container form")
  const registerForm = document.getElementById("register-form")
  const loginButton = document.querySelector(".login-container button")

  // Exibir o formulário de login e ocultar o formulário de registro
  loginForm.classList.remove("hidden")
  registerForm.classList.add("hidden")
}

// Função para validar o CPF
function validarCPF(cpf) {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]+/g, "")

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false
  }

  // Validação do primeiro dígito verificador
  let soma = 0
  let peso = 10
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * peso--
  }
  let digito1 = 11 - (soma % 11)
  digito1 = digito1 === 10 || digito1 === 11 ? 0 : digito1

  // Validação do segundo dígito verificador
  soma = 0
  peso = 11
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * peso--
  }
  let digito2 = 11 - (soma % 11)
  digito2 = digito2 === 10 || digito2 === 11 ? 0 : digito2

  // Verifica se os dois dígitos verificadores são válidos
  return cpf.charAt(9) == digito1 && cpf.charAt(10) == digito2
}

// Função para validar o formulário de registro
function validarFormulario(event) {
  const cpf = document.getElementById("cpf").value

  // Verifica se o CPF é válido
  if (!validarCPF(cpf)) {
    alert("CPF inválido! Por favor, insira um CPF válido.")
    event.preventDefault() // Impede o envio do formulário
    return false
  }

  // Se o CPF for válido, o formulário pode ser enviado
  return true
}

// Adicionando o evento de validação no formulário de registro
document
  .querySelector("#register-form")
  .addEventListener("submit", validarFormulario)

// Selecionando o checkbox e o corpo da página
const themeSwitch = document.getElementById("theme-switch")
const body = document.body

// Quando o checkbox for alterado, alterna entre os temas
themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    body.classList.add("theme-dark") // Ativa o tema escuro
    body.classList.remove("theme-light") // Desativa o tema claro
  } else {
    body.classList.add("theme-light") // Ativa o tema claro
    body.classList.remove("theme-dark") // Desativa o tema escuro
  }
})
