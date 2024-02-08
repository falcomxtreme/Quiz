const perguntas_e_Respostas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
           "Uma linguagem de marcação",
           "Uma linguagem de programação",
           "Um framework popular"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a sintaxe correta para se referir a um arquivo JavaScript externo?",
        respostas: [
           "<script href='script.js'></script>",
           "<script src='script.js'></script>",
           "<javascript src='script.js'></javascript>"
        ],
        correta: 1
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
           "let myVar;",
           "variable myVar;",
           "var myVar;"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
           "==",
           "===",
           "="
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
        respostas: [
           "32",
           "5",
           "6"
        ],
        correta: 0
    },
    {
        pergunta: "Como se escreve um comentário de uma linha em JavaScript?",
        respostas: [
           "// Comentário aqui",
           "<!-- Comentário aqui -->",
           "/* Comentário aqui */"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método em JavaScript usado para remover o último elemento de um array e retorna o elemento removido?",
        respostas: [
           "pop()",
           "shift()",
           "remove()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        respostas: [
           "Arredonda um número para o inteiro mais próximo",
           "Converte uma string em um número inteiro",
           "Retorna a parte decimal de um número"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
        respostas: [
           "for (i = 0; i < 5; i++)",
           "loop (i = 0; i < 5; i++)",
           "for (i = 0; i <= 5)"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
        respostas: [
           "Adiciona um elemento ao final de um array",
           "Adiciona um ouvinte de evento a um elemento HTML",
           "Remove um ouvinte de evento de um elemento HTML"
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas_e_Respostas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//for para cada pergunta e resposta, além da verificação do item selecionado.
for(const item of perguntas_e_Respostas){
    // 
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    //for para as respostas

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        dt.querySelector('input').setAttribute('name', 'pergunta-' 
            + perguntas_e_Respostas.indexOf(item)
        )
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            //Caso o item selecionado true esteja na var ele será deletado
            //na seleção de um item falso dentro da mesma pergunta.

            corretas.delete(item)
            
            //Caso estaCorreta esteja True adiciona o item.
            if(estaCorreta){
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        //Append das alternativas de resposta

        quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()

    //Append das perguntas
    quiz.appendChild(quizItem)   
}