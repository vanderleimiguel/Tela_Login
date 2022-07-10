const imagem = document.querySelector('#img-1')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const spanMsgEmail = document.querySelector('#msg-email')
const btnEntrar = document.querySelector("button[type='submit']")
const body = document.querySelector('body')
const title = document.querySelector('#title')
const btnSubmit = document.querySelector('button[type="submit"]')

imagem.addEventListener('click', function () {
  if (imagem.src.includes('login2')) {
    imagem.src = './assets/images/login1.png'
    body.style.backgroundColor = 'rgb(52, 198, 149)'
    title.style.color = 'rgb(52, 198, 149)'
    btnSubmit.style.backgroundcolor = 'rgb(52, 198, 149)'
  } else {
    imagem.src = './assets/images/login2.png'
    body.style.backgroundColor = 'blue'
    title.style.color = 'blue'
    btnSubmit.style.backgroundcolor = 'blue'
  }
})

inputEmail.addEventListener('keyup', function () {
  if (inputEmail.value == '') {
    // spanMsgEmail.innerHTML = "<h1>Digite um valor</h1>"
    spanMsgEmail.innerText = 'Digite um valor no email'
  } else {
    // spanMsgEmail.innerHTML = "";
    spanMsgEmail.innerText = ''
  }
})

inputPassword.addEventListener('keyup', function () {
  const msgSpan = document.querySelector('#msgPassword')
  if (inputPassword.value.length < 8) {
    //fazer a vericação
    const span = document.createElement('span') //cria elemento span
    const message = document.createTextNode(
      'Digite uma senha superior a 8 caracteres'
    ) //criei uma varial que gaurda o texto criado pelo createTextNode
    span.appendChild(message) //adicionei como filho de span
    span.setAttribute('id', 'msgPassword') //cria a spn com id

    if (!msgSpan) {
      inputPassword.insertAdjacentElement('afterend', span)
    } else {
      msgSpan.innerText = 'Digite uma senha superior a 8 caracteres'
    }
  } else {
    msgSpan.innerText = ''
  }
})

btnEntrar.addEventListener('click', function (event) {
  // alert("acessou");
  event.preventDefault() //cancela o padrão de recarregar a página
  const spanMsgPass = document.querySelector('#msgPassword')

  if (
    spanMsgPass.childNodes.length != 0 ||
    spanMsgEmail.childNodes.length != 0
  ) {
    alert('Preencha todos campos corretamente! ')
  } else {
    alert('Seja Bem vindo!!!')
  }
})

// body.addEventListener('click', function () {
//   body.style.backgroundColor = 'blue'

//   if (body.src.includes('blue')) {
//     body.style.backgroundColor = 'green'
//   } else {
//     body.style.backgroundColor = 'blue'
//   }
// })
