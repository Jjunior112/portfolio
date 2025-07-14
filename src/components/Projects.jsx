import Project from "./Project";

const Projects = () => {
  const projectsList = [
     {
      name: "Gerenciador de inventário",
      image: "inventoryManager.webp",
      description:
        "Sistema de inventário distribuído em microsserviços, implementado em .NET com API Gateway via Ocelot e orquestração de contêineres com Docker Compose.",
      linkGithub: "https://github.com/Jjunior112/inventorySystemMicroservice",
      linkImage: "",
    },
    
    {
      name: "Gerador de QrCode AWS",
      image: "qr_image.png",
      description:
        "Este projeto é uma aplicação desenvolvida em Java 21 que gera códigos QR personalizados a partir de entradas fornecidas pelo usuário e os armazena automaticamente em um bucket da AWS S3. Ideal para aplicações que precisam gerar e armazenar QR codes de forma segura, escalável e automatizada.",
        linkGithub: "https://github.com/Jjunior112/qr-code-gen",
        // linkImage: ""
      },
      
      {
        name: "Api de envio de e-mails AWS",
        image: "email.png",
        description:
          "Este projeto é uma aplicação Java que realiza o envio de e-mails com base em entradas fornecidas pelo usuário, utilizando o AWS SES (Simple Email Service) para garantir o envio automatizado, seguro e escalável.",
        linkGithub: "https://github.com/Jjunior112/emailSender-Aws",
        // linkImage: ""
      },
      {
      name: "Sistema de clínica médica",
      image: "agenda.png",
      description:
        "Este projeto é uma aplicação desenvolvida em Java 21 durante o curso de Spring Boot da Alura. O sistema realiza o cadastro de médicos e pacientes, permitindo também o agendamento de consultas. Foram aplicadas boas práticas como arquitetura em camadas, validações e persistência de dados com JPA usando MySql como banco de dados.",
      linkGithub: "https://github.com/Jjunior112/vollmed-api",
      linkImage: "",
    },
   

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
