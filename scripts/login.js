let login = [
  {
    nome: 'Heitor',
    email: 'heitor@gmail.com',
    senha: '123'
  },
  {
    nome: 'João',
    email: 'joao@gmail.com',
    senha: '123'
  }
]

const formCadastro = document.querySelector('.form-cadastro')
formCadastro.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.querySelector('.input-email').value
  const senha = document.querySelector('.input-senha').value

  login.forEach((conta) => {
    if(conta.email === email){
      if(conta.senha === senha) {
        alert('logado')
        window.location.href = "ManagementPage.html"
      }

    }
  })
})