const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();


    const numeroAInput = document.getElementById('numeroA');
    const numeroBInput = document.getElementById('numeroB');

    const numeroA = parseFloat(numeroAInput.value);
    const numeroB = parseFloat(numeroBInput.value);

    const sucessMessage = document.querySelector('.sucess-message');
    const errorMensagem = document.querySelector('.error-mensagem');

    if(numeroA < numeroB) {
    sucessMessage.innerHTML = `Número A <b>${numeroA}</b> é menor que o número B <b>${numeroB}</b>`
    sucessMessage.style.display = 'block';
    errorMensagem.style.display = 'none';

    numeroAInput.value = '';
    numeroBInput.value = '';
} else {
    errorMensagem.innerHTML = 'O número A é maior que o número B'
    errorMensagem.style.display = 'block';
    sucessMessage.style.display = 'none';

    numeroAInput.value = '';
    numeroBInput.value = '';

}
});
