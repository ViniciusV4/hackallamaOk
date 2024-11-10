import Groq from "groq-sdk";
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Habilita CORS para todas as rotas
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/ia", async (req, res) => {

    try {
        const { message } = req.body;
        const chatCompletion = await getGroqChatCompletion(message);
        console.log(chatCompletion.choices[0]?.message?.content || "");

        res.send({ reply: chatCompletion.choices[0]?.message?.content || "Desculpe, não consegui entender." });
    } catch (error) {
        console.error("Error fetching chat completion:", error);
        res.status(500).send({ error: "An error occurred while processing your request." });
    }
});


async function getGroqChatCompletion(text) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "Você é um agente educacional especializado em criar experiências de aprendizado lúdicas para crianças do primeiro ano, com foco na história e cultura afro-brasileira. Seu objetivo é ajudar os professores a ensinar a importância da cultura afrodescendente de forma envolvente, respeitosa e profunda, respeitando o legado e a contribuição das pessoas negras para a sociedade brasileira. Com objetivo de criar aulas no formato de contos infantis, usando histórias como base a história que for passada. Figuras afro-brasileiras de relevância histórica e suas contribuições para a sociedade, contextualizando a luta contra a escravidão, o racismo e a busca pela liberdade.O conteúdo precisa ser adaptado de forma acessível, lúdica e empática para crianças pequenas (do primeiro ano), com foco na formação de uma identidade positiva e respeitosa sobre a cultura negra.As aulas devem usar elementos narrativos, personagens e atividades que possibilitem as crianças a se envolverem de maneira emocional e cognitiva com a história.Encoraje reflexões sobre diversidade, igualdade e respeito, de forma sensível e apropriada para a faixa etária.Evite conteúdos que possam ser interpretados como estereotipados ou discriminatórios.Sempre que possível, forneça contextos e exemplos práticos para os professores usarem em sala de aula. Cada aula deve ser detalhada, com histórias narradas de maneira criativa e lúdica, como se fosse um conto encantado ou uma história divertida que as crianças possam entender facilmente.Para tornar a aula mais lúdica, inclua personagens ou elementos de fantasia que possam conectar a história real com a imaginação das crianças, como animais ou objetos mágicos que ajudam os protagonistas a enfrentar desafios.Não se esqueça de incluir uma reflexão ao final de cada aula, incentivando as crianças a pensar sobre o que aprenderam de forma positiva e construtiva.",
            },
            {
                role: "user",
                content: "Foi então batizado com o nome “Francisco” e recebeu uma educação esmerada. Aprendeu português e latim, além do catecismo para ser batizado na fé católica. Aos 10 anos de idade, já era fluente em português e latim. Aos 15, fugiu e voltou para o Quilombo de Palmares. Alguns anos depois, em 1675, Zumbi ganha notoriedade ao defender o quilombo do ataque das tropas portuguesas. Nesta batalha sangrenta, demonstrou suas habilidades de guerreiro jaga. Com 25 anos de idade, Zumbi desafia seu tio. Em 1680, assume o lugar de Ganga Zumba como líder de Palmares (segundo estudiosos, Ganga Zumba teria sido assassinado). Sua postura diante do governo colonial é de desafio e enfrentamento. Assim, os líderes portugueses contratam os serviços dos bandeirantes Domingos Jorge Velho e Bernardo Vieira de Melo. Em 1694, eles lideram o ataque que irá destruir a 'Cerca do Macaco', capital de Palmares. Destruíram-na completamente e ferem seu líder, Zumbi, o qual consegue fugir. Saiba mais sobre o Quilombo dos Palmares. Curiosidade: A palavra “Zumbi” ou “Zambi”, nome adotado pelo herói, é de origem 'quimbunda', e faz alusão a seres espirituais, como fantasmas, espectros e duendes. Morte de Zumbi dos Palmares: Em 1695, no dia 20 de Novembro, Zumbi é delatado por um de seus capitães, Antônio Soares, e morto pelo capitão Furtado de Mendonça. O líder de Palmares tinha 40 anos de idade. Após derrotar e matar Zumbi, o capitão foi premiado com cinquenta mil réis pelo monarca D. Pedro II de Portugal. Sua cabeça foi cortada, salgada e levada ao governador Melo e Castro. Foi exposta em praça pública de modo a acabar com o mito da imortalidade de Zumbi dos Palmares. A data de sua morte, 20 de novembro, foi adotada como o Dia da Consciência Negra. Entenda tudo sobre a Escravidão no Brasil. Homenagens a Zumbi dos Palmares: A importância de Zumbi dos Palmares é tão grande para o movimento negro que hoje seu nome batiza uma Faculdade: a faculdade Zumbi dos Palmares - FAZP - em São Paulo. Além disso, o Aeroporto Internacional de Maceió/AL, inaugurado em 2005, leva seu nome. A escola de samba carioca Vila Isabel, homenageou Zumbi dos Palmares em 1988 com o enredo Kizomba, festa da raça. Foi assim que ela conquistou o seu primeiro título com o tema.",
            },
            {
                role: "user",
                content: "Como o conto deve ser contado: O conto deve ser narrado de forma lúdica, mas com uma abordagem que ajude as crianças a entender a luta de Zumbi dos Palmares como uma luta pela liberdade e contra as injustiças da escravidão. A história deve destacar como a coragem de Zumbi inspirou pessoas a lutar por um mundo mais justo, explicando de maneira acessível que, naquela época, os portugueses, como colonizadores, impunham muitas injustiças às pessoas trazidas de África para serem escravizadas no Brasil. Os portugueses eram retratados como governantes severos, que retiraram a liberdade das pessoas e trouxeram sofrimento e dificuldades para aqueles que eram escravizados. O conto pode mostrar que, apesar de todos os desafios, Zumbi nunca desistiu de lutar pela liberdade e por um lugar onde todos pudessem viver em paz e igualdade, que era o Quilombo dos Palmares. A narrativa deve conectar essa história aos dias de hoje, explicando que a luta de Zumbi inspira a busca por igualdade e respeito a todos os povos. Dessa forma, as crianças entenderão o impacto duradouro da resistência de Zumbi, reconhecendo a importância de respeitar a história e valorizar a liberdade e os direitos de todos.",
            },
            {
                role: "user",
                content: "História de Zumbi dos Palmares: Zumbi dos Palmares (1655-1695) foi o último líder do Quilombo dos Palmares e também o de maior relevância histórica. Zumbi ganhou respeito e admiração de seus compatriotas quilombolas devido suas habilidades como guerreiro, a qual lhe conferia coragem, liderança e conhecimentos de estratégia militar. Lutou pela liberdade de culto e religião, bem como pelo fim da escravidão colonial no Brasil. Apesar disso, este líder também ficou conhecido pela severidade despótica com que conduzia Palmares, onde, inclusive, havia um tipo mais brando de escravidão. De todas as maneiras, não admitia a dominação dos brancos sobre os negros e, portanto, tornou-se o maior símbolo pela liberdade dos negros da história brasileira. Biografia de Zumbi dos Palmares: Zumbi era sobrinho do líder Ganga Zumba, o qual, por sua vez, era filho da princesa Aqualtune dos Jagas (ou imbangalas), um povo de tradições militares com ótimos guerreiros. Há poucos dados sobre sua vida pessoal, mas sabe-se que era casado com Dandara, que lutava ao seu lado. Zumbi nasceu aproximadamente em 1655, no Quilombo dos Palmares, Capitania de Pernambuco, região da serra da Barriga. Hoje, o local é União dos Palmares, no estado brasileiro de Alagoas. Zumbi foi aprisionado pela expedição de Brás da Rocha Cardoso e entregue aos cuidados do Padre Antônio Melo, em Porto Calvo, quando ainda tinha cerca de seis anos." + text,
            },
        ],
        "model": "llama-3.2-90b-text-preview",
    });
}


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
