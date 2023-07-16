const botaoMobile =  document.querySelector('.btn-mobile');
const navegacao = document.querySelector('.nav')

botaoMobile.addEventListener('click', () => {
    botaoMobile.classList.toggle('ativo')
    navegacao.classList.toggle('ativo')
})