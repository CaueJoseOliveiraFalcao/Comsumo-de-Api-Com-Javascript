"use strict"


const pesquisarCep = async() =>{
    const cep =  document.getElementById("cep").value;
    const url = ` viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(url)
    const endereco = await dados.json();
    console.log (endereco.cep);
}
document.getElementById("cep").addEventListener('focusout' , pesquisarCep);
