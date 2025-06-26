// Altera o tema da página
function toggleMode() {
    const html = document.documentElement

    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Marcus Vinícius com barba usando óculos de sol, no meio de duas pessoas, olhando para trás sorrindo, vestindo camisa social branca e ao fundo algumas árvores.")

        // Salva o tema como 'light' no localStorage
        localStorage.setItem("theme", "light")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Foto de Marcus Vinícius com barba usando óculos de sol, olhando levemente para o lado, vestindo camisa branca e ao fundo algumas árvores.")

        // Salva o tema como 'dark' no localStorage (ou remove)
        localStorage.setItem("theme", "dark")
    }


}

// Atualiza imagem de perfil conforme o tema salvo
function updateImage() {
  const img = document.querySelector("#profile img")
  if (!img) return

  if (document.documentElement.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Marcus Vinícius com barba usando óculos de sol, no meio de duas pessoas, olhando para trás sorrindo, vestindo camisa social branca e ao fundo algumas árvores.")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Marcus Vinícius com barba usando óculos de sol, olhando levemente para o lado, vestindo camisa branca e ao fundo algumas árvores.")
  }
}

// Chama automaticamente ao carregar a página
window.addEventListener("DOMContentLoaded", updateImage)

// Efeito de transição da página
function navegarComTransicao(destino) {
  document.body.classList.add('fade-out')

  // Aguarda o tempo da transição antes de trocar de página
  setTimeout(() => {
    window.location.href = destino
  }, 500)
}
