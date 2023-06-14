function validarLogin() {
    var usuario = document.getElementById("user").value;
    var senha = document.getElementById("password").value;

    // Verificar se o usuário e a senha correspondem aos valores pré-estabelecidos
    if (usuario === "Admin" && senha === "123456") {
      alert("Login realizado com sucesso!");
      window.open ("https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021")
    } else {
      alert("Usuário ou senha incorretos. Tente novamente.");
      
    }
  }

  
  var loginButton = document.getElementById("botao");
  loginButton.addEventListener("click", validarLogin);

  
