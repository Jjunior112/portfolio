import Project from "./Project"

const Projects = () => {
    const projectsList = [
        {
            name: "Gerenciador de tarefas",
            image: "lista-tarefas.webp",
            description: "Este projeto é um CRUD de Gerenciamento de tarefas desenvolvido usando AspNet core, ligado a um banco de dados Sqlite acessado via entity framework com consultas LINQ que possui funcionalidades básicas como criar, editar, marcar como concluída, alterar prioridade e excluir a tarefa.",
            linkGithub: "https://github.com/Jjunior112/api-crud-to-do-list"
        }, {
            name: "Newsletter Subscription API",
            image: "newsletter.png",
            description: "Este sistema, desenvolvido em C# utilizando ASP.NET Core, processa solicitações contendo dados de nome e e-mail para cadastro em uma lista de newsletter. Durante o processamento, o e-mail é validado para garantir que atende aos requisitos estabelecidos e que não está previamente registrado. Caso aprovado, o e-mail é armazenado em um banco de dados, que será utilizado para o envio periódico da newsletter.",
            linkGithub: "https://github.com/Jjunior112/signNewsletter"
        },
        {
            name: "Sistema bancário",
            image: "bank.jpg",
            description: "Este sistema desenvolvido em C# usando AspNet core, possui funcionalidade de criação de conta com encriptação de senha e  transações de depósito,consulta de saldo, saque e encerramento da conta. O projeto atualmente está em desenvolvimento e contará com autenticação JWT para garantir a segurança da aplicação.",
            linkGithub: "https://github.com/Jjunior112/BankAccount"
        }]


    return (
        <section className="projects">


            <h2>Projetos</h2>

            <div className="listProjects">
                {
                    projectsList.map((project) => (
                        <Project name={project.name} image={project.image} description={project.description} linkGithub={project.linkGithub} />
                    ))
                }
            </div>


        </section>
    )
}

export default Projects