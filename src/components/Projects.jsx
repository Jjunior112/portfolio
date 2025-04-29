import Project from "./Project";

const Projects = () => {
  const projectsList = [
    {
      name: "Sistema de Biblioteca",
      image: "library.png",
      description:
        "Este sistema, desenvolvido em C# utilizando ASP.NET Core, gerencia uma biblioteca permitindo a criação de contas e login de usuários. Usuários autenticados podem reservar e devolver livros diretamente pela plataforma, com registros automáticos vinculados ao responsável. Apenas administradores têm acesso às funcionalidades de criação, edição e exclusão de livros no catálogo, garantindo controle sobre o acervo. A interface, construída com Bootstrap, oferece uma experiência responsiva e intuitiva, acessível em diferentes dispositivos.",
      linkGithub: "https://github.com/Jjunior112/LibraryManager",
      // linkImage: ""
    },
    
    {
      name: "Sistema de gerenciamento de tarefas",
      image: "lista-tarefas.webp",
      description:
        "Este projeto é uma API REST para um sistema de tarefas, desenvolvida com ASP.NET Core e SQL Server, utilizando o Entity Framework Core para acesso a dados. A aplicação está conteinerizada com Docker e segue uma arquitetura baseada em Repository Pattern e Unit of Work, garantindo uma estrutura modular, escalável e de fácil manutenção.",
      linkGithub: "https://github.com/Jjunior112/TaskSystem",
      // linkImage: ""
    },

    {
      name: "Gerenciador de inventário",
      image: "inventoryManager.webp",
      description:
        "Sistema de inventário distribuído em microsserviços, implementado em .NET com API Gateway via Ocelot e orquestração de contêineres com Docker Compose.",
      linkGithub: "https://github.com/Jjunior112/inventorySystemMicroservice",
      linkImage: "",
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
