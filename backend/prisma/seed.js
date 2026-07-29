import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.course.createMany({
    data: [
      {
        title: "Bacharelado em Sistemas de Informação",
        description:
          "O curso de Bacharelado em Sistemas de Informação forma profissionais capazes de projetar, desenvolver e gerenciar soluções tecnológicas que apoiam os processos organizacionais. O estudante adquire uma sólida formação em tecnologia da informação, gestão e inovação, aprendendo a integrar conhecimentos técnicos e estratégicos para resolver problemas do mundo real.",
        instituteName: "Instituto Federal de Alagoas - Campus Arapiraca",
        instituteLogo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg/250px-Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg.png",
        image: "https://picsum.photos/id/180/800/400",
        readTime: "4min",
        modality: "Presencial",
        duration: "4 anos",
        degree: "Bacharel em Sistemas de Informação",
        shift: "Noturno",
        campus: "Arapiraca"
      },
      {
        title: "Tecnólogo em Logística - Noturno",
        description:
          "O curso Tecnólogo em Logística forma profissionais aptos a planejar, organizar e controlar os fluxos de materiais, produtos e informações dentro das cadeias de suprimentos. O estudante aprende gestão de estoques, transportes, distribuição e armazenagem, além de ferramentas de tecnologia aplicadas à logística.\n\nCom duração mais curta que um bacharelado, o curso prepara o egresso para atuar rapidamente no mercado de trabalho em empresas de todos os portes, industriais, comerciais ou de serviços.",
        instituteName: "Instituto Federal de Alagoas - Campus Arapiraca",
        instituteLogo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg/250px-Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg.png",
        image: "https://picsum.photos/id/1071/800/400",
        readTime: "3min",
        modality: "Presencial",
        duration: "2 anos e meio",
        degree: "Tecnólogo em Logística",
        shift: "Noturno",
        campus: "Arapiraca"
      },
      {
        title: "Licenciatura em Ciências Biológicas - Noturno",
        description:
          "A Licenciatura em Ciências Biológicas forma professores capacitados para atuar no ensino de Biologia na educação básica. O curso combina disciplinas de biologia geral, ecologia, genética e zoologia com formação pedagógica, estágios supervisionados e práticas de ensino.\n\nO licenciado está preparado para lecionar em escolas públicas e privadas, além de poder atuar em projetos de educação ambiental e divulgação científica.",
        instituteName: "Instituto Federal de Alagoas - Campus Maceió",
        instituteLogo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg/250px-Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg.png",
        image: "https://picsum.photos/id/40/800/400",
        readTime: "4min",
        modality: "Presencial",
        duration: "4 anos",
        degree: "Licenciado em Ciências Biológicas",
        shift: "Noturno",
        campus: "Maceió"
      }
    ]
  });

  await prisma.edital.createMany({
    data: [
      {
        title: "EDITAL 01/2025",
        content:
          "IFAL abre processo seletivo para ingresso nos cursos Técnicos Integrados ao Ensino Médio",
        time: "Processo Seletivo · 4min de leitura"
      },
      {
        title: "EDITAL 02/2025",
        content:
          "IFAL abre processo seletivo para ingresso nos cursos Técnicos Integrados ao Ensino Médio",
        time: "Processo Seletivo · 4min de leitura"
      }
    ]
  });

  await prisma.exam.create({
    data: {
      title: "curso técnico Integrado ao Ensino médio de 2019",
      questions: {
        create: [
          {
            text: "O adjunto adverbial vem, normalmente, no final da frase, mas ele pode aparecer em outra posição... Marque-a.",
            options: JSON.stringify([
              "Atualmente, via computador, estou conversando com meu primo que está nos Estados Unidos.",
              "Atualmente estou, via computador, conversando com meu primo que está nos Estados Unidos.",
              "Atualmente estou conversando, via computador, com meu primo que está nos Estados Unidos.",
              "Atualmente estou conversando com meu primo, via computador, que está nos Estados Unidos.",
              "Via computador, atualmente estou conversando com meu primo que está nos Estados Unidos."
            ]),
            correctAnswerIndex: 3
          },
          {
            text: "Não são marcas linguísticas que constroem a poeticidade do texto:",
            options: JSON.stringify([
              "As escolhas lexicais e os arranjos sintáticos...",
              "O ritmo frasal, que busca estabelecer uma relação...",
              "O derramamento lírico provocado...",
              "A subjetivação da experiência pela seleção...",
              "O uso de palavras e expressões técnicas, de difícil compreensão..."
            ]),
            correctAnswerIndex: 4
          }
        ]
      }
    }
  });

  console.log("Seed concluído.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });