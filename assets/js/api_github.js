// exibir_load(true);
// let produtos = [];

function renderiza_foto(foto){
    const img_foto = document.getElementById('foto');
    img_foto.src=`${foto}`;
}


fetch("https://api.github.com/users/kamilasavi")
.then(response => response.json())
.then(data =>{
    // produtos = data;
    // exibirProdutos(produtos);
    console.log(data);
    renderiza_foto(data.avatar_url);
})

.catch(error =>{//para status de erro
    console.error('algo deu errado na requisicao', error);
})
.finally((finalizar) =>{
    // exibir_load(false);
    console.warn('sempre cai aqui');
});
