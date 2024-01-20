import { Button } from "@/components/ui/button";
import prisma from "../utils/db";

export default function SeedDatabase() {
    async function postData() {
        "use server"
        await prisma.movie.createMany({
            data: [
              {
                id: 0,
                title: "Gran Turismo",
                age: 12,
                duration: 2.15,
                overview:
                  "A história de realização dos desejos de um jogador adolescente de Gran Turismo cujas capacidades de jogo lhe fizeram vencer uma série de competições da Nissan para se tornar um verdadeiro piloto de corridas profissional.",
                videoSource:
                  "https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4",
                imageString:
                  "https://image.tmdb.org/t/p/original/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg",
                release: 2023,
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/GVPzGBvPrzw",
              },
              {
                imageString:
                  "https://image.tmdb.org/t/p/original/kHlX3oqdD4VGaLpB8O78M25KfdS.jpg",
                title: "A Haunting in Venice",
                age: 12,
                duration: 1.44,
                id: 1,
                overview:
                  "O célebre detetive Hercule Poirot, agora reformado e vivendo num exílio autoimposto em Veneza, participa com relutância numa sessão espírita de Halloween num palácio decadente e assombrado. Quando um dos convidados é assassinado, o detetive é empurrado para um mundo sinistro de sombras e segredos.",
                release: 2023,
                videoSource: "",
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/yEddsSwweyE",
              },
              {
                id: 2,
                title: "Five Nights at Freddy's",
                age: 16,
                duration: 1.5,
                overview:
                  "Recentemente despedido e desesperado por trabalho, um jovem problemático chamado Mike aceita trabalhar num lugar como segurança noturno em um restaurante temático abandonado: A Pizzaria do Freddy. Mas ele logo descobre que nada lá é o que parece.",
                release: 2023,
                videoSource: "",
                imageString:
                  "https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/0VH9WCFV6XQ",
              },
      
              {
                id: 3,
                title: "The Blacklist",
                age: 16,
                duration: 0,
                imageString:
                  "https://image.tmdb.org/t/p/original/dDPwCyZG8arYwMDoQl0sm4xccCE.jpg",
                overview: `Raymond "Red" Reddington, um dos fugitivos mais procurados pelo FBI, entrega-se pessoalmente na sede do FBI em Washington, D.C. Afirma que ele e o FBI têm os mesmos interesses: apanhar criminosos e terroristas perigosos. Nas últimas duas décadas, fez uma lista dos criminosos e terroristas mais importantes, mas que o FBI não consegue encontrar porque não sabe que existem. Reddington chama-lhe "A Lista Negra". Reddington aceita colaborar, mas insiste em falar apenas com Elizabeth Keen, uma novata do FBI que traça perfis.`,
                release: 2013,
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/watch?v=IKtL4IW6G0I&t",
              },
              {
                id: 4,
                title: "Suits",
                age: 12,
                duration: 0,
                imageString:
                  "https://image.tmdb.org/t/p/original/or0E36KfzJYZwqXeiCfm1JgepKF.jpg",
                overview:
                  "Enquanto foge de um negócio de droga que correu mal, Mike Ross, um jovem brilhante que abandonou a faculdade, entra numa entrevista de emprego com um dos melhores advogados de Nova Iorque, Harvey Specter. Cansado dos alunos de Direito que se formam em Uniesquinas, Harvey arrisca-se e contrata Mike na hora, depois de reconhecer o seu talento e memória fotográfica.",
                release: 2011,
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/embed/85z53bAebsI",
              },
              {
                id: 5,
                title: "Chernobyl",
                age: 16,
                duration: 0,
                imageString:
                  "https://image.tmdb.org/t/p/original/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg",
                overview:
                  "A verdadeira história de uma das piores catástrofes provocadas pelo homem na história: o catastrófico acidente nuclear de Chernobyl. Um relato dos homens e mulheres corajosos que se sacrificaram para salvar a Europa de um desastre inimaginável.",
                release: 2019,
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/embed/s9APLXM9Ei8",
              },
              {
                id: 6,
                title: "Retribution",
                age: 12,
                duration: 1.31,
                imageString:
                  "https://image.tmdb.org/t/p/original/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
                overview:
                  "Quando um misterioso interlocutor coloca uma bomba debaixo do banco do seu carro, Matt Turner inicia uma perseguição a alta velocidade pela cidade para completar uma série de tarefas específicas - tudo isto com os seus filhos presos no banco de trás.",
                release: 2023,
                videoSource: "",
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/jzQn0-WH4WM",
              },
              {
                id: 7,
                title: "Spider-Man: Across the Spider-Verse",
                age: 12,
                duration: 2.2,
                imageString:
                  "https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
                overview:
                  "Depois de se reunir com Gwen Stacy, o Homem-Aranha de Brooklyn é catapultado para o Multiverso, onde encontra a Sociedade Aranha, uma equipa de Pessoas-Aranha encarregada de proteger a existência do Multiverso. Mas quando os heróis entram em conflito sobre como lidar com uma nova ameaça, Miles dá por si a lutar contra os outros Aranhas e tem de partir sozinho para salvar aqueles que mais ama.",
                release: 2023,
                videoSource: "",
                category: "movie",
                youtubeString: "https://www.youtube.com/embed/shW9i6k8cB0",
              },
      
              {
                id: 8,
                title: "Coco",
                release: 2017,
                age: 0,
                duration: 1.45,
                imageString:
                  "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
                overview:
                  "Apesar da desconcertante proibição da música imposta pela sua família há várias gerações, Miguel sonha em tornar-se um músico de sucesso como o seu ídolo, Ernesto de la Cruz. Desesperado para provar o seu talento, Miguel encontra-se na deslumbrante e colorida Terra dos Mortos, seguindo uma misteriosa cadeia de acontecimentos. Pelo caminho, conhece o encantador Hector e, juntos, partem numa extraordinária viagem para desvendar a verdadeira história por detrás da história da família de Miguel.",
                videoSource: "",
                category: "movie",
                youtubeString: "https://www.youtube.com/embed/xlnPHQ3TLX8",
              },
              {
                id: 9,
                title: "Monk",
                release: 2002,
                age: 12,
                duration: 0,
                imageString:
                  "https://image.tmdb.org/t/p/original/cTQYB39EwM01fl9b9KpNUgZfOsT.jpg",
                overview:
                  "Adrian Monk já foi uma estrela em ascensão no Departamento de Polícia de São Francisco, lendário por usar meios não convencionais para resolver os casos mais desconcertantes do departamento. Mas depois do trágico (e ainda por resolver) assassínio da sua mulher Trudy, desenvolveu um caso extremo de perturbação obsessivo-compulsiva. Atualmente a trabalhar como consultor privado, Monk continua a investigar casos das formas mais pouco convencionais.",
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/embed/mftbaaU82Uc",
              },
              {
                id: 10,
                title: "Family Guy",
                age: 16,
                duration: 0,
                imageString:
                  "https://image.tmdb.org/t/p/original/y4PDksvxM05sNxacoU8xIYITCDA.jpg",
                overview:
                  "Uma série de animação doentia, retorcida, politicamente incorrecta e muito doce que apresenta as aventuras da disfuncional família Griffin. O trapalhão Peter e a sofredora Lois têm três filhos. Stewie (um bebé brilhante mas sádico, decidido a matar a mãe e a dominar o mundo), Meg (a mais velha e a rapariga mais impopular da cidade) e Chris (o do meio, não é muito inteligente mas tem uma paixão por filmes). O último membro da família é Brian - um cão falante e muito mais do que um animal de estimação, ele mantém Stewie sob controle enquanto bebe Martinis e resolve os seus próprios problemas de vida.",
                release: 1999,
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/embed/7hRxWGo49oc",
              },
              {
                id: 11,
                title: "One Piece",
                age: 14,
                duration: 0.25,
                imageString:
                  "https://image.tmdb.org/t/p/original/kTHzGRaVDDAaXIFZyFBwO7j5vNe.jpg",
                overview:
                  `A série centra-se no Monkey D. Luffy - um jovem feito de borracha depois de ter comido involuntariamente um Fruto do Diabo - que parte numa viagem do Mar Azul Oriental para encontrar o tesouro supremo do falecido Rei dos Piratas Gol D. Roger, conhecido como "One Piece", e assim assumir o título que anteriomente era de Roger.`,
                release: 1999,
                videoSource: "",
                category: "recent",
                youtubeString: "https://www.youtube.com/watch?v=VP8QfLfuE7g",
              },
            ],
          });
    }
    return(
        <div className="m-5 ">
            <form action={postData}>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}