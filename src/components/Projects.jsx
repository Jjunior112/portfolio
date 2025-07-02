import Project from "./Project";

const Projects = () => {
  const projectsList = [
     {
      name: "Gerenciador de inventário",
      image: "qr_image.png",
      description:
        "Sistema de inventário distribuído em microsserviços, implementado em .NET com API Gateway via Ocelot e orquestração de contêineres com Docker Compose.",
      linkGithub: "https://github.com/Jjunior112/inventorySystemMicroservice",
      linkImage: "",
    },
    
    {
      name: "Gerador de QrCode AWS",
      image: "lista-tarefas.webp",
      description:
        "Este projeto é uma aplicação desenvolvida em Java 21 que gera códigos QR personalizados a partir de entradas fornecidas pelo usuário e os armazena automaticamente em um bucket da AWS S3. Ideal para aplicações que precisam gerar e armazenar QR codes de forma segura, escalável e automatizada.",
        linkGithub: "https://github.com/Jjunior112/qr-code-gen",
        // linkImage: ""
      },
      
      {
        name: "Sistema de Biblioteca",
        image: "library.png",
        description:
          "Este sistema, desenvolvido em C# utilizando ASP.NET Core, gerencia uma biblioteca permitindo a criação de contas e login de usuários. Usuários autenticados podem reservar e devolver livros diretamente pela plataforma, com registros automáticos vinculados ao responsável. Apenas administradores têm acesso às funcionalidades de criação, edição e exclusão de livros no catálogo, garantindo controle sobre o acervo. A interface, construída com Bootstrap, oferece uma experiência responsiva e intuitiva, acessível em diferentes dispositivos.",
        linkGithub: "https://github.com/Jjunior112/LibraryManager",
        // linkImage: ""
      }
   

  ];

  return (
    <section className="projects">
      <h2>Projetos</h2>

      <div className="listProjects">
        {projectsList.map((project) => (
          <Project
            name={project.name}
            image={project.image}
            description={project.description}
            linkGithub={project.linkGithub} /*linkImage={project.linkImage}*/
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
