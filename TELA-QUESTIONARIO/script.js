const perguntas = [
    {
        pergunta: "Voce tem dificuldade de se Alimentar ?",
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


const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');
const enviarBtn = document.querySelector('#enviar');
const resultadoDiv = document.querySelector('#resultado');

let respostasUsuario = [];

for(const item of perguntas) {
    const quizitem = template.content.cloneNode(true);
    quizitem.querySelector('h3').textContent = item.pergunta;

    for(let resposta of item.respostas) {
        const dt = quizitem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
        dt.querySelector('input').onchange = (event) => {
            respostasUsuario[parseInt(event.target.name.split('-')[1])] = parseInt(event.target.value);
        }

        quizitem.querySelector('dl').appendChild(dt);
    }

    quizitem.querySelector('dl dt').remove();

    quiz.appendChild(quizitem);
}

enviarBtn.addEventListener('click', () => {
    let respostas = [];

    for(let i = 0; i < respostasUsuario.length; i++) {
        const resposta = perguntas[i].respostas[respostasUsuario[i]];
        respostas.push(resposta);
    }

    const simCount = respostas.filter(resposta => resposta === 'Sim').length;
    const talvezCount = respostas.filter(resposta => resposta === 'Talvez').length;
    const naoCount = respostas.filter(resposta => resposta === 'Não').length;

    let diagnostico = "<span class='diag'>Diagnostico: </span>";
    
    if (simCount >= 3) {
        diagnostico += "<span class='sim'>Possível alto nível de estresse, ansiedade e depressão. Recomendamos buscar ajuda profissional.</span><br><br>" +
                      "<span class='sim'>(15) 98136-4474 - Dr. Gustavo Frederico Peres (Psiquiatra)</span>";
    } else if (naoCount >= 3) {
        diagnostico += "<span class='nao'>Baixa probabilidade de estresse, ansiedade e depressão. Continue cuidando da sua saúde mental.</span>";
    } else {
        diagnostico += "<span class='outros'>Probabilidade moderada de estresse, ansiedade e depressão. Monitorize seus sentimentos e busque apoio se necessário.</span><br><br>" +
                      "<span class='outros'>(15) 99749-4257 - Dra. Maria Cristina Miranda Pavia (Psicóloga)</span>";
    }

    resultadoDiv.innerHTML = diagnostico;
});
