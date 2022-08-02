import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    try {
      const data = [
        { name: 'Samuel Souza', description: 'Desenvolvedor de Software', subscribers: 514, link: 'https://github.com/SamuelSouza2020?tab=repositories' },
        { name: 'Samuel Souza 2', description: 'Desenvolvedor de Software', subscribers: 515, link: 'https://github.com/SamuelSouza2020?tab=repositories' },
        { name: 'Samuel Souza 3', description: 'Desenvolvedor de Software', subscribers: 516, link: 'https://github.com/SamuelSouza2020?tab=repositories' },
        { name: 'Samuel Souza 4', description: 'Desenvolvedor de Software', subscribers: 517, link: 'https://github.com/SamuelSouza2020?tab=repositories' },
      ];
  
      const channel = { name: 'Samuel Souza 5', descriptiom: 'Desenvolvedor de Software', subscribers: 601, link: 'https://github.com/SamuelSouza2020?tab=repositories' };
  
      const res = await prisma.youtube_channels.create({
        data: channel,
      });
  
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }
  
  main();