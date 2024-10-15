import Project from "./Project"

const Projects = () => {
    const projectsList = [{
        name: "Landing Page de advocacia",
        image: "advocacy.png",
        description: "Este projeto é um modelo de site de advocacia que foi projetado para oferecer uma experiência clara e objetiva, facilitando o acesso às informações essenciais sobre o escritório e seus serviços. Com um layout moderno e de fácil navegação, ele reflete o profissionalismo e a seriedade com que a equipe jurídica atua.",
        linkGithub: "https://github.com/Jjunior112/advocacy",
        linkSite: "https://advocacytest.netlify.app/"
    },
    {
        name: "Pesquisador de usuários",
        image: "githubSearch.png",
        description: "Este projeto é um pesquisador de usuários do Github que faz integração com API da plataforma que retorna infomações de usuários como nome, descrição do perfil, quantidade de repositórios, entre outras ",
        linkGithub: "https://github.com/Jjunior112/Pesquisador_de_usuarios",
        linkSite: "https://cheerful-haupia-5e1339.netlify.app/"
    }, {
        name: "Stay Update",
        image: "stayUpdate.png",
        description: "Este projeto faz parte de um desafio do site Frontend Mentor que consiste em uma página de assinatura de newsletter que verifica as informações inseridas e retorna uma mensagem de sucesso caso esteja tudo de acordo.",
        linkGithub: "https://github.com/Jjunior112/newsletter",
        linkSite: "https://superb-palmier-ba87aa.netlify.app/"
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