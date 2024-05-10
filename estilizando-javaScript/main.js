document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form-deposito');
    var successMessage = document.querySelector('.success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário

        // Aqui você pode adicionar a lógica para processar os dados do formulário
        // Por exemplo, enviar os dados para um servidor ou atualizar a interface do usuário

        // Exibe a mensagem de sucesso
        successMessage.style.display = 'block';
        successMessage.innerHTML = 'O montante de <strong>'  + form.elements[2].value + '</strong> foi enviado para o cliente <strong>' +
            form.elements[0].value + '</strong> - conta <strong>' +
            form.elements[1].value + '</strong>.';
    });
});

