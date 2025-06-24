let encontros = []

const container = document.querySelector(".container-encontros")

function renderizarEncontros(lista) {
    container.innerHTML = ""
    lista.forEach((encontro) => {
        const div = document.createElement("div")
        div.classList.add("encontros")

        div.innerHTML = `
            <p><strong>Proponente:</strong> ${encontro.nomeProponente}</p>
            <p><strong>Livro:</strong> ${encontro.livroSugerido}</p>
            <p><strong>Data e Hora:</strong> ${encontro.dataHora}</p>
            <p><strong>Descrição:</strong> ${encontro.descricao}</p>
        `
        container.appendChild(div)
    })
}

window.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:8080/encontros')
        .then(response => response.json())
        .then(data => {
            encontros = data
            renderizarEncontros(encontros)
        })
        .catch(error => console.error('Erro ao buscar dados:', error))
})

const formCadastro = document.querySelector(".form-cadastro")
if (formCadastro) {
    formCadastro.addEventListener("submit", (event) => {
        event.preventDefault()
        const nomeProponente = document.querySelector("#nomeProponente").value
        const livroSugerido = document.querySelector("#livroSugerido").value
        const dataHora = document.querySelector("#dataHora").value
        const descricao = document.querySelector("#descricao").value

        if (nomeProponente && livroSugerido && dataHora && descricao) {
            const novoEncontro = {
                nomeProponente,
                livroSugerido,
                dataHora,
                descricao
            }

            fetch('http://localhost:8080/encontros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoEncontro)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao cadastrar no servidor')
                    }
                    return response.json()
                })
                .then(data => {
                    encontros.push(novoEncontro)
                    renderizarEncontros(encontros)
                    alert("Encontro cadastrado com sucesso!")
                    formCadastro.reset()
                })
                .catch(error => {
                    console.error(error)
                    alert("Erro ao salvar no servidor.")
                })
        } else {
            alert("Por favor, preencha todos os campos.")
        }
    })
}