const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const loginFormData = new FormData(loginForm)
  console.log(loginFormData)

  const name = loginFormData.get('astronautName')
  const email = loginFormData.get('astronautEmail')
  const password = loginFormData.get('astronautPassword')
  console.log(name, email, password)
})
