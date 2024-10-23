//fetch é um metodo nativo do js que permite fazer requisições assincronas
//then() usamos para acesso a retorno do tipo response e dentro dos parenteses vamos adicionar os parametros
let consultaCEP = fetch('https://viacep.com.br/ws/00000000/json/')
.then(response => response.json())//transforma minha response em dados do tipo json
.then(dadosFormatados=>{//meu dados formatados para json podem ser utilizados de forma legivel no meu script
    if (dadosFormatados.erro) {//se o retorno for true, vai entrar diretamente aqui no erro e vai jogar na pilha de execução
        throw Error('Cep não encontrado na base de dados')
    }
    console.log(dadosFormatados)
}).catch(error => console.log(`Erro na requsição=> ${error}`))//captura os erros e imprime no console
.finally(msg => console.log(`processamento concluido`))
console.log(consultaCEP)