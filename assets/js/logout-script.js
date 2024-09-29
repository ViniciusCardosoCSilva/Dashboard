const botaoEncerrar = document.querySelector('#botao-encerrar-sessao');

botaoEncerrar.addEventListener('click', ()=>{
    sessionStorage.clear();
    window.location.href = './login.html'
})