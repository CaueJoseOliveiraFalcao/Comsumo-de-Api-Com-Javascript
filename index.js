"use strict"
const cors = "cors"

const pesquisarCep = async() =>{
    const cep =  document.getElementById("cep").value;
    const url = ` viacep.com.br/ws/01001000/json/`
    const dados = await fetch(url)
    const endereco = await dados.json();
    console.log (endereco.cep);
}
document.getElementById("cep").addEventListener('focusout' , pesquisarCep());
