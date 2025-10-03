// Validação e interação do formulário de contato
(() => {
  const form = document.getElementById('form-contato');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Verificar se o formulário é válido
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    // Simula envio
    alert(`Obrigado pelo contato, ${nome}! Em breve entrarei em contato via ${email}.`);

    form.reset();
    form.classList.remove('was-validated');
  });
})();
