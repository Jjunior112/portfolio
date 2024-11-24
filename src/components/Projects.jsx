import Project from "./Project"

const Projects = () => {
    const projectsList = [
        {
            name: "Gerenciador de tarefas",
            image: "lista-tarefas.webp",
            description: "Este projeto é um CRUD de Gerenciamento de tarefas desenvolvido usando ASP.NET MVC, ligado a um banco de dados Sqlite acessado via entity framework com consultas LINQ. Na tela inicial o usuário precisa registar ou logar no sistema e conta com funcionalidades básicas como criar, editar, marcar como concluída, alterar prioridade e excluir a tarefa que só podem ser acessadas pelo usuário autenticado. ",
            linkGithub: "https://github.com/Jjunior112/to-do-auth",
            // linkImage: ""
        }, {
            name: "Newsletter Subscription API",
            image: "newsletter.png",
            description: "Este sistema, desenvolvido em C# utilizando ASP.NET Core, processa solicitações contendo dados de nome e e-mail para cadastro em uma lista de newsletter. Durante o processamento, o e-mail é validado para garantir que atende aos requisitos estabelecidos e que não está previamente registrado. Caso aprovado, o e-mail é armazenado em um banco de dados, que será utilizado para o envio periódico da newsletter.",
            linkGithub: "https://github.com/Jjunior112/signNewsletter",
            // linkImage: ""
        },
        // {
        //     name: "Sistema bancário",
        //     image: "bank.png",
        //     description: "Este sistema desenvolvido em C# usando ASP.NET core, possui funcionalidade de criação de conta com encriptação de senha e  transações de depósito,consulta de saldo, saque e encerramento da conta. O projeto atualmente está em desenvolvimento e contará com autenticação JWT para garantir a segurança da aplicação.",
        //     linkGithub: "https://github.com/Jjunior112/BankAccount",
        //     linkImage: ""
        // },
        {
            name: "Sistema de Biblioteca",
            image: "library.png",
            description: "Este sistema, desenvolvido em C# utilizando ASP.NET Core, gerencia uma biblioteca permitindo a criação de contas e login de usuários. Usuários autenticados podem reservar e devolver livros diretamente pela plataforma, com registros automáticos vinculados ao responsável. Apenas administradores têm acesso às funcionalidades de criação, edição e exclusão de livros no catálogo, garantindo controle sobre o acervo. A interface, construída com Bootstrap, oferece uma experiência responsiva e intuitiva, acessível em diferentes dispositivos.",
            linkGithub: "https://github.com/Jjunior112/LibraryManager",
            // linkImage: ""
        }
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
    ]

    return (
        <section className="projects">


            <h2>Projetos</h2>

            <div className="listProjects">
                {
                    projectsList.map((project) => (
                        <Project name={project.name} image={project.image} description={project.description} linkGithub={project.linkGithub} /*linkImage={project.linkImage}*/ />
                    ))
                }
            </div>


        </section>
    )
}

export default Projects