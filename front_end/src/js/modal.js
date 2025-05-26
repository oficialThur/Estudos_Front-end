document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('success-modal');
  const closeBtn = document.getElementById('close-modal');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData
      })
        .then(response => response.text())
        .then(result => {
          // Exibe o modal de sucesso
          modal.classList.add('active');
          // Limpa o formulário
          form.reset();
        })
        .catch(error => {
          alert('Erro ao enviar o formulário. Tente novamente.');
        });
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });
  }
});