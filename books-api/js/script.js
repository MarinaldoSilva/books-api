//fetch é um metodo nativo do js que permite fazer requisições assincronas
//then() usamos para acesso a retorno do tipo response e dentro dos parenteses vamos adicionar os parametros
/*let consultaCEP = fetch('https://viacep.com.br/ws/00000000/json/')
.then(response => response.json())//transforma minha response em dados do tipo json
.then(dadosFormatados=>{//meu dados formatados para json podem ser utilizados de forma legivel no meu script
    if (dadosFormatados.erro) {//se o retorno for true, vai entrar diretamente aqui no erro e vai jogar na pilha de execução
        throw Error('Cep não encontrado na base de dados')
    }
    console.log(dadosFormatados)
}).catch(error => console.log(`Erro na requsição=> ${error}`))//captura os erros e imprime no console
.finally(msg => console.log(`processamento concluido`))
console.log(consultaCEP)
*/

/*
    Função buscaCEP(cep):

Estamos ensinando nosso ajudante robô a procurar o endereço de um CEP específico.

"async" avisa ao robô que ele pode precisar esperar um pouco enquanto busca o endereço.

try e catch:

"try" é como pedir ao robô para tentar fazer algo.

"catch" é o que o robô deve fazer se algo der errado, como se ele estivesse pegando um erro para não deixar cair no chão.

Dentro de try:

fetch: Pedimos ao robô para buscar informações do CEP na internet.

await: Pedimos ao robô para esperar até ter as informações antes de continuar.

json: Transformamos essas informações em algo que podemos entender, como transformar letras e números em uma história que podemos ler.

if (cepFormatado.erro): Verificamos se houve um erro, como se estivéssemos olhando se a história está correta. Se houver um erro, pedimos ao robô para lançar um alerta de erro.

console.log(cepFormatado): Pedimos ao robô para mostrar as informações na tela, como se ele estivesse mostrando um desenho para a gente.

Dentro de catch:

Mostra qualquer erro que aconteceu.

Dentro de finally:

O robô sempre executa isso no final, não importa o que aconteceu antes. Ele diz "final da requisição", como se estivesse encerrando a tarefa.

Lista de CEPs:

let ceps = ['53625448', '010010000'];: Temos uma lista de CEPs (como se fossem duas bolinhas coloridas).

map com buscaCEP:

ceps.map(valores => buscaCEP(valores));: Pedimos ao robô para procurar os endereços de cada CEP na lista, um por um, e criar uma nova lista com as informações encontradas.


    */

async function buscaCEP(cep){
    try{
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let cepFormatado = await consultaCEP.json();
        
        if (cepFormatado.erro) {
            throw Error("erro de cep não existente")
        }

        console.log(cepFormatado)
        return cepFormatado
    }catch(e){
       console.log(e)
    }finally{
        console.log('final da requisição')
    }
}
/**exemplo de como fazer várias buscar em simultaneo */
/*
let ceps = ['53625448','01001000']
let conjuntoCEPS = ceps.map(valores => buscaCEP(valores))
console.log(" TESTE",conjuntoCEPS)//Retorna o resultado das promisses: fullfild ou rejected
Promise.all(conjuntoCEPS).then(reponse => console.log(reponse))
*/
/* 

O que é Promise.all?

Imagine que Promise.all é como uma caixa grande que pode conter várias pequenas caixas. Cada pequena caixa (promessa) representa uma tarefa que nosso ajudante robô está fazendo.

Promise.all vai esperar até que todas as pequenas caixas estejam prontas e abertas.

O que é conjuntoCEPS?

Lembra da nossa lista de CEPs que criamos antes? conjuntoCEPS é uma lista de tarefas (promessas) que o robô está fazendo para buscar os endereços de cada CEP.

O que Promise.all(conjuntoCEPS) faz?

Aqui, estamos pedindo ao robô para esperar até que todas as tarefas de buscar os endereços sejam concluídas. Só depois que todas as tarefas estiverem prontas, ele continua para a próxima parte do código.

.then(response => console.log(response))

then é o que acontece depois que todas as pequenas caixas estão abertas.

response é o que o robô encontrou dentro das caixas (as respostas para cada CEP).

console.log(response) pede ao robô para mostrar na tela o que ele encontrou dentro de todas as caixas.

Como funciona o código inteiro junto:
Fazemos várias tarefas de busca de CEP:

let conjuntoCEPS = ceps.map(valores => buscaCEP(valores));

Isso cria uma lista de tarefas (promessas) que o robô está fazendo para buscar os endereços.

Esperamos todas as tarefas terminarem:

Promise.all(conjuntoCEPS).then(response => console.log(response));

Promise.all espera todas as buscas de CEP serem concluídas.

Quando todas as buscas terminam, then é executado, mostrando na tela o que foi encontrado.

Essa sequência garante que todos os CEPs sejam buscados e processados antes de mostrar os resultados finais. 

*/