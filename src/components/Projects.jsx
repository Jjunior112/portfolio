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
      name: "Newsletter Subscription API",
      image: "newsletter.png",
      description:
        "Este sistema, desenvolvido em C# utilizando MVC, processa solicitações contendo dados de nome e e-mail para cadastro em uma lista de newsletter. Durante o processamento, o e-mail é validado para garantir que atende aos requisitos estabelecidos e que não está previamente registrado. Caso aprovado, o e-mail é armazenado em um banco de dados, que será utilizado para o envio periódico da newsletter. Há views para todos os cenários de sucessos e erros possíveis",
      linkGithub: "https://github.com/Jjunior112/SignNewsLetterMVC",
      // linkImage: ""
    },

    {
      name: "Gerenciador de inventário",
      image: "product.png",
      description:
        "Esta API desenvolvida em C# usando ASP.NET core é um funcionalidades CRUD de criação de produtos, pesquisa geral e por ID,  alteração de informações e exclusão de produtos. ",
      linkGithub: "https://github.com/Jjunior112/inventoryManager",
      linkImage: "",
    },

    {
      name: "Api de login de usuário",
      image: "login-api.webp",
      description:
        "Este projeto é uma API REST de login de usuário em ASP.NET Core com Entity Framework e autenticação JWT. Consumida por um app React.js, permite cadastrar usuário e realizar login. Ao realizar login, é exibido na tela as informações de cadastro do usuário.",
      linkGithub: "https://github.com/Jjunior112/login-dotnet-reactjs",
      // linkImage: ""
    },
    // {
    //     name: "API de pedidos de restaurante",
    //     image: "bank.jpg",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, earum commodi. Sapiente a vel eius deleniti rerum minus tenetur? Quaerat accusantium eligendi libero maiores porro, enim veritatis nemo facilis! Aut minus velit laborum iste odio ratione incidunt fugiat vitae soluta amet? Doloribus obcaecati aperiam alias totam aliquid voluptatem, nam sequi!",
    //     linkGithub: "",
    //     linkImage: ""
    // },
    // {
    //     name: "Sistema de notas fiscais",
    //     image: "bank.jpg",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, earum commodi. Sapiente a vel eius deleniti rerum minus tenetur? Quaerat accusantium eligendi libero maiores porro, enim veritatis nemo facilis! Aut minus velit laborum iste odio ratione incidunt fugiat vitae soluta amet? Doloribus obcaecati aperiam alias totam aliquid voluptatem, nam sequi!",
    //     linkGithub: "",
    //     linkImage: ""
    // },
    // {
    //     name: "Chat em tempo real",
    //     image: "bank.jpg",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, earum commodi. Sapiente a vel eius deleniti rerum minus tenetur? Quaerat accusantium eligendi libero maiores porro, enim veritatis nemo facilis! Aut minus velit laborum iste odio ratione incidunt fugiat vitae soluta amet? Doloribus obcaecati aperiam alias totam aliquid voluptatem, nam sequi!",
    //     linkGithub: "",
    //     linkImage: ""
    // },
    // {
    //     name: "Vaquinha Online",
    //     image: "bank.jpg",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, earum commodi. Sapiente a vel eius deleniti rerum minus tenetur? Quaerat accusantium eligendi libero maiores porro, enim veritatis nemo facilis! Aut minus velit laborum iste odio ratione incidunt fugiat vitae soluta amet? Doloribus obcaecati aperiam alias totam aliquid voluptatem, nam sequi!",
    //     linkGithub: "",
    //     linkImage: ""
    // }
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
