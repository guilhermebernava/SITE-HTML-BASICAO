function dados() {
  const dado = {
    usuario : document.getElementById("usuario").value,
    email : document.getElementById("email").value,
    telefone : document.getElementById("telefone").value,
    nome_completo : document.getElementById("nome_completo").value,
    idade : document.getElementById("idade").value,
    senha : document.getElementById("senha").value,
    senha_correta : document.getElementById("senha_confirmacao").value,
    comentario : document.getElementById("comentario").value,  
  }
  console.log(dado);
}