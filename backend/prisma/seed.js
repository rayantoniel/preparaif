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
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/IFAL_logo.svg/2560px-IFAL_logo.svg.png",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
        readTime: "4min",
        modalidade: "Presencial",
        duracao: "4 anos",
        titulo: "Bacharel em Sistemas de Informação",
        turno: "Noturno",
        campus: "Arapiraca",
        edicts: JSON.stringify(["1. Sisu 2025", "1. Sisu 2024", "1. Sisu 2023"])
      },
      {
        title: "Tecnólogo em Logística - Noturno",
        description: "",
        instituteName: "Instituto Federal de Alagoas - Campus Arapiraca",
        instituteLogo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/IFAL_logo.svg/2560px-IFAL_logo.svg.png",
        image: "",
        readTime: "",
        modalidade: "",
        duracao: "",
        titulo: "",
        turno: "Noturno",
        campus: "Arapiraca",
        edicts: JSON.stringify([])
      },
      {
        title: "Licenciatura em Ciências Biológicas - Noturno",
        description: "",
        instituteName: "Instituto Federal de Alagoas - Campus Maceió",
        instituteLogo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/IFAL_logo.svg/2560px-IFAL_logo.svg.png",
        image: "",
        readTime: "",
        modalidade: "",
        duracao: "",
        titulo: "",
        turno: "Noturno",
        campus: "Maceió",
        edicts: JSON.stringify([])
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