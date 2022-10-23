const envVariable = import.meta.env.VITE_HELLO
const mode = document.createElement('h2')
mode.textContent = envVariable
document.body.insertAdjacentElement('beforeend', mode)
