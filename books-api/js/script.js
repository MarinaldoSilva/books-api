let cep = document.getElementById('cep');
let logradouro = document.getElementById('endereco'); 
let bairro = document.getElementById('bairro');
let cidade = document.getElementById('cidade'); 
let estado = document.getElementById('estado');
let infoErro = document.getElementById('erro');
infoErro.innerHTML = ""
cep.addEventListener('focusout', ()=>buscaEndereco(cep.value))

async function buscaEndereco(cep) {
    try{
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);//recebe o resultado da promisse em bytes     
        let consultaCEPConvertidoJson = await consultaCEP.json();

        if (consultaCEPConvertidoJson.erro) {
            throw Error('verifique o cep e tente novamente')
        }
        logradouro.value = consultaCEPConvertidoJson.logradouro
        bairro.value = consultaCEPConvertidoJson.bairro
        cidade.value = consultaCEPConvertidoJson.localidade
        estado.value = consultaCEPConvertidoJson.uf
        console.log(consultaCEPConvertidoJson)

       // console.log(consultaCEP)
    }catch(erro){
        console.log('erro')
        infoErro.innerHTML = 'cep invalido'
    }
}


