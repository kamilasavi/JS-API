let elementoLogin = document.getElementById("login");
let elementoSenha = document.getElementById("senha");

const verificarLogin = (login,senha) =>{
    if(login == "maria" && senha == "123"){
        localStorage.setItem("usuarioLogado","Maria");
        localStorage.setItem("sobrenomeUsuarioLogado","Silva");
        return true;
    }
        return false;
};

const apresentaMensagemErro = ()=>{
    alert("Não foi possível realizar login!");
}

const realizarLogin = () =>{
    const login = elementoLogin.value;
    const senha = elementoSenha.value;
    if(verificarLogin(login, senha)){
        window.location.assign("./views/home.html");
    }else{
        apresentaMensagemErro();
    }
    
}