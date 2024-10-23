async function buscaCep(cep) {
    
    try{
        const buscaEndereco = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        const enderecoJSON = await buscaEndereco.json();

        if (enderecoJSON.erro) {
            throw Error('VERIFIQUE O CEP E TENTE NOVAMENTE')
        }
        console.log('obj json', enderecoJSON)
        return enderecoJSON;
    }catch(e){
        console.log(e)
    }finally{
        console.log('consulta finalizada')
    }
    
    
   
}

buscaCep(53600000);