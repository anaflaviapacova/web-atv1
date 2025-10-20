// Exemplo simples de validação e alerta no login

document.getElementById('login-btn').addEventListener('click', function () {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert('Por favor, preencha email e senha.');
  } else {
    alert(`Bem-vindo, ${email}! (login simulado)`);
  }
});

// Simulação de cadastro

document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = this.querySelector('input[placeholder="Nome"]').value.trim();
  const sobrenome = this.querySelector('input[placeholder="Sobrenome"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const senha = this.querySelector('input[placeholder="Nova senha"]').value.trim();

  if (!nome || !sobrenome || !email || !senha) {
    alert('Por favor, preencha todos os campos para cadastro.');
    return;
  }

  alert(`Obrigado por se cadastrar, ${nome} ${sobrenome}! (simulação)`);
  this.reset();
});
