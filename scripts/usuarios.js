let usuarios = [
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

const formLogin = document.querySelector('.form-login')
if(formLogin) {
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.querySelector('.input-email').value
    const senha = document.querySelector('.input-senha').value

    if (!email || !senha) {
      alert("Preencha todos os campos.")
      return
    }

    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": senha
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao tentar login')
      }
      return response.json()
    })
    .then(data => {
      if (data.sucesso) {
        alert('Login realizado com sucesso!')
        window.location.href = "ManagementPage.html"
      } else {
        alert('Email ou senha inválidos.')
      }
    })
    .catch(error => {
      console.error('Erro no login:', error)
      alert("Erro ao fazer login.")
    })
  })
}


if(document.querySelector('.form-cadastro')) {
  document.querySelector('.form-cadastro').addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = document.querySelector('.js-input-name').value
    const email = document.querySelector('.js-input-email').value
    const senha = document.querySelector('.js-input-senha').value

    fetch('http://localhost:8080/auth/registrar', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "nome": nome,
        "email": email,
        "password": senha
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao cadastrar no servidor')
      }
      return response.json()
    })
    .then(data => {
        console.log('Encontro salvo no servidor:', data)
    })
    .catch(error => {
        console.error(error)
        alert("Erro ao salvar no servidor.")
    })

    console.log(`
      nome: ${nome}
      email: ${email}
      senha: ${senha}  
    `)
  })
}

function criarUsuario() {

  const nome = document.querySelector('.js-input-name').value
  const email = document.querySelector('.js-input-email').value
  const senha = document.querySelector('.js-input-senha').value

  fetch('http://localhost:8080/auth/registrar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "nome": nome,
      "email": email,
      "password": senha
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao cadastrar no servidor')
    }
    return response.json()
  })
  .then(data => {
      console.log('Encontro salvo no servidor:', data)
  })
  .catch(error => {
      console.error(error)
      alert("Erro ao salvar no servidor.")
  })

  console.log(`
    nome: ${nome}
    email: ${email}
    senha: ${senha}  
  `)
}