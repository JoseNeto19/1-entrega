// Variáveis para pegar os elementos do formulário HTML
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobInput = document.querySelector('#job');
const messageInput = document.querySelector('#message');

// Verificar se o form foi encontrado
document.addEventListener('DOMContentLoaded', () => {
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Verifica se o campo nome está vazio
            if (nameInput.value === '') {
                alert("Por favor, preencha corretamente o nome");
                return;
            }

            // Verifica se o campo email está vazio
            if (emailInput.value === '') {
                alert("Por favor, preencha corretamente o email");
                return;
            }

            // Verifica se o campo senha está vazio
            if (passwordInput.value === '') {
                alert("Por favor, preencha corretamente a senha");
                return;
            }

            // Valida a senha
            if (!validatePassword(passwordInput.value, 6)) {
                alert("A senha precisa ter no mínimo 6 dígitos");
                return;
            }

            // Verifica se o campo profissão está vazio
            if (jobInput.value === '') {
                alert("Por favor, selecione sua profissão");
                return;
            }

            // Verifica se o campo mensagem está vazio
            if (messageInput.value === '') {
                alert("Por favor, escreva uma mensagem");
                return;
            }

            // Envia o formulário se todos os campos estiverem preenchidos corretamente
            form.submit();
        });
    } else {
        console.error("Formulário não encontrado!");
    }
});

// Função para validar senha
function validatePassword(password, minDigit) {
    return password.length >= minDigit;
}
