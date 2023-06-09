const myModal = document.getElementById('hidden')
const myInput = document.getElementById('project-title')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})