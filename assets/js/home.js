let elemento_usuario_logado = document.getElementById("usuario-logado");

const nome_usuario_logado = localStorage.getItem("usuarioLogado");
const sobrenome_usuario_logado = localStorage.getItem("sobrenomeUsuarioLogado");

elemento_usuario_logado.innerText = `Olá ${nome_usuario_logado} ${sobrenome_usuario_logado}`;

const retornarLogin = () => {
    //localStorage.removeItem("usuarioLogado");
    //localStorage.removeItem("sobrenomeUsuarioLogado");
    localStorage.clear();
    window.location.assign("../index.html");
}