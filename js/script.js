
const url = 'https://api.github.com/users';
const main = document.getElementById('main')
// let user = 'marcelocant'
let text = ''

function getUser(user) {

    fetch(`${url}/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            text = `<p>${data.name} possui ${data.public_repos} repositórios públicos no GitHub como ${data.login}</p>`
            if (data.name == "" || data.name == undefined){
                //window.alert("ERRO! Verifique o nome de usuario")
                main.innerHTML = "<p style=' color: red;'>ERRO!<br> Nome de usuário não encontrado.</p>"
            } else {
                main.innerHTML = text
            }
        })
        .catch((error) => console.error('Erro: ', error.message || error))

}

const userInput = document.getElementById('username')

userInput.addEventListener('focusout', function(event){
    getUser(event.target.value)
})


