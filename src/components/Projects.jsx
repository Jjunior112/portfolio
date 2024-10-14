import Project from "./Project"

const Projects = () => {
    const projectsList = [{
        name: "Projetos Landing Pages",
        image: "profile.png",
        description: "API de Cardápio, uma aplicação Node.js que utiliza o MongoDB como banco de dados para gerenciar pratos e tipos de pratos em um cardápio. Esta API oferece endpoints simples para adicionar, remover e alterar informações sobre os pratos, bem como adicionar novos tipos de pratos.",
        linkGithub: "https://github.com/Jjunior112",
        linkSite: "https://react-icons.github.io/react-icons/search/#q=earth"
    },
    {
        name: "Projetos usando API",
        image: "profile.png",
        description: "API de Cardápio, uma aplicação Node.js que utiliza o MongoDB como banco de dados para gerenciar pratos e tipos de pratos em um cardápio. Esta API oferece endpoints simples para adicionar, remover e alterar informações sobre os pratos, bem como adicionar novos tipos de pratos.",
        linkGithub: "https://github.com/Jjunior112",
        linkSite: "https://react-icons.github.io/react-icons/search/#q=earth"
    }]


    return (
        <section className="projects">

            <div className="projectsTitle">
                <h2>Projetos</h2>
                <a>Contact me</a>
            </div>
            <div className="listProjects">
                {
                    projectsList.map((project) => (
                        <Project name={project.name} image={project.image} description={project.description} linkGithub={project.linkGithub} linkSite={project.linkSite} />
                    ))
                }
            </div>


        </section>
    )
}

export default Projects