const formLogin = document.getElementById('form-login')

console.log('formlogin', formLogin)

formLogin.addEventListener('submit', (event) => {
    event.preventDefault()

    // Validações do formulário
    // 1. Username > 6 caracteres
    // 2. Password > 8 caracteres
})