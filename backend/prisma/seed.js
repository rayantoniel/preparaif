import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Limpando dados antigos...");
  await prisma.question.deleteMany({});
  await prisma.exam.deleteMany({});
  await prisma.edital.deleteMany({});
  await prisma.course.deleteMany({});

  console.log("1. Criando Editais primeiro...");

  const edital1 = await prisma.edital.create({
    data: {
      title: "EDITAL 01/2025",
      description:
        "IFAL abre processo seletivo para ingresso nos cursos Técnicos...",
      time: "Processo Seletivo · 4min de leitura",
      content: `<div className="edict-text-content"><p>Conteúdo do edital 01...</p></div>`,
      instituteName: "Instituto Federal de Alagoas - Campus Maceió",
      instituteLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg/250px-Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg.png",
    },
  });

  const edital2 = await prisma.edital.create({
    data: {
      title: "EDITAL 02/2025",
      description:
        "IFAL abre processo seletivo para ingresso nos cursos de Graduação...",
      time: "Processo Seletivo · 4min de leitura",
      content: `<div className="edict-text-content"><p>Conteúdo do edital 02...</p></div>`,
      instituteName: "Instituto Federal de Alagoas - Campus Arapiraca",
      instituteLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg/250px-Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg.png",
    },
  });

  await prisma.course.create({
    data: {
      title: "Bacharelado em Sistemas de Informação",
      description: "O curso de Bacharelado em Sistemas de Informação...",
      instituteName: "Instituto Federal de Alagoas - Campus Arapiraca",
      instituteLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg/250px-Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg.png",
      image: "https://picsum.photos/id/180/800/400",
      readTime: "4min",
      modality: "Presencial",
      duration: "4 anos",
      degree: "Bacharel em Sistemas de Informação",
      shift: "Noturno",
      campus: "Arapiraca",
      editals: {
        connect: [{ id: edital2.id }],
      },
    },
  });

  await prisma.course.create({
    data: {
      title: "Tecnólogo em Logística - Noturno",
      description: "O curso Tecnólogo em Logística...",
      instituteName: "Instituto Federal de Alagoas - Campus Arapiraca",
      instituteLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg/250px-Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg.png",
      image: "https://picsum.photos/id/1071/800/400",
      readTime: "3min",
      modality: "Presencial",
      duration: "2 anos e meio",
      degree: "Tecnólogo em Logística",
      shift: "Noturno",
      campus: "Arapiraca",
    },
  });

  await prisma.course.create({
    data: {
      title: "Licenciatura em Ciências Biológicas - Noturno",
      description: "A Licenciatura em Ciências Biológicas...",
      instituteName: "Instituto Federal de Alagoas - Campus Maceió",
      instituteLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg/250px-Instituto_Federal_de_Alagoas_-_Marca_Vertical_2015.svg.png",
      image: "https://picsum.photos/id/40/800/400",
      readTime: "4min",
      modality: "Presencial",
      duration: "4 anos",
      degree: "Licenciado em Ciências Biológicas",
      shift: "Noturno",
      campus: "Maceió",
      editals: {
        connect: [{ id: edital1.id }],
      },
    },
  });

  await prisma.exam.create({
    data: {
      title: "Curso técnico Integrado ao Ensino médio de 2019",
      questions: {
        create: [
          {
            text: "O adjunto adverbial vem, normalmente, no final da frase, mas ele pode aparecer em outra posição... Marque-a.",
            options: JSON.stringify([
              "Atualmente, via computador, estou conversando com meu primo que está nos Estados Unidos.",
              "Atualmente estou, via computador, conversando com meu primo que está nos Estados Unidos.",
              "Atualmente estou conversando, via computador, com meu primo que está nos Estados Unidos.",
              "Atualmente estou conversando com meu primo, via computador, que está nos Estados Unidos.",
              "Via computador, atualmente estou conversando com meu primo que está nos Estados Unidos.",
            ]),
            correctAnswerIndex: 3,
          },
          {
            text: "Não são marcas linguísticas que constroem a poeticidade do texto:",
            options: JSON.stringify([
              "As escolhas lexicais e os arranjos sintáticos...",
              "O ritmo frasal, que busca estabelecer uma relação...",
              "O derramamento lírico provocado...",
              "A subjetivação da experiência pela seleção...",
              "O uso de palavras e expressões técnicas, de difícil compreensão...",
            ]),
            correctAnswerIndex: 4,
          },
        ],
      },
    },
  });

  console.log("Seed concluído.");
}

main()
  .catch((e) => {
    console.error("Erro no Seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
