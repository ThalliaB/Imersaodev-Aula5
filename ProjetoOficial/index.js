function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
  
    if (filmeFavorito.endsWith(".jpg")) {
      listaFilmeNaTela(filmeFavorito);
    } else {
      console.error("Endereço de imagem inválido");
    }
  
    document.getElementById("filme").value = "";
  }
  
  function listaFilmeNaTela(filme) {
    var elementoListaFilme = document.getElementById("listaFilmes");
    elementoListaFilme.innerHTML += "<img src=" + filme + ">";
  }
  