const perguntas = [
    {
        pergunta: "Sua sáude mental esta em bom estado ?",
        respostas: [
            "Sim",
            "Talvez ",
            "Não",
        ],
        correta: 2
    },
    {
        pergunta: "Voce tem se sentido muito ansioso ultimamente ?",
        respostas: [
            "Sim",
            "Talvez",
            "Não",
        ],
        correta: 0
    },
    {
        pergunta: "Voce tem se sentido Depressivo ultimamente ?",
        respostas: [
            "Sim",
            "Talvez",
            "Não",
        ],
        correta: 0
    },
    {
        pergunta: "Voce tem dificuldade de focar em certas situações ?",
        respostas: [
            "Sim",
            "Talvez",
            "Não",
        ],
        correta: 2
    },
    {
        pergunta: "Voce convive com o sentimento de burnout ?",
        respostas: [
            "Sim",
            "Talvez",
            "Não",
        ],
        correta: 1
    },
    
             
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


//loop ou laço de repetção
for(const item of perguntas) {
    const quizitem = template.content.cloneNode(true) 
    quizitem.querySelector('h3').textContent = item.pergunta 
    
    for(let resposta of item.respostas) {
        const dt = quizitem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta 
            
           
        } 

        quizitem.querySelector('dl').appendChild(dt)
    }

    quizitem.querySelector('dl dt').remove()



    quiz.appendChild(quizitem) 
}