

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


