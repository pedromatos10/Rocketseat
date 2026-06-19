function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // selecion a imagem
  const img = document.querySelector("#profile img")

  //substitui a imagem

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e jaqueta preta, sem barba e fundo azul",
    )
  } else {
    // se tiver sem light mode, mantem a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, sem barba e fundo amarelo",
    )
  }
}
