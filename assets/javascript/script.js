// Navegação suave para links internos (âncoras com id)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const targetId = this.getAttribute('href').substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Ajuste para compensar menu fixo
        behavior: 'smooth',
      })
    }
  })
})

// Marcar botão clicado como ativo (quando não muda de página)
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn')
  buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
      buttons.forEach((b) => b.classList.remove('active'))
      this.classList.add('active')
    })
  })

  // Marcar a página actual no menu de navegação
  const currentPage = window.location.pathname.split('/').pop()
  document.querySelectorAll('.navlinks a').forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active')
    }
  })
})
