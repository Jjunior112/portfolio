import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'

const NavBar = () => {
    return (
        <nav>
            <h1><span>&lt;</span>Juarez Junior <span>/&gt;</span></h1>
            <ul>

                <li><a href="https://www.linkedin.com/in/juarez-gonzaga-de-castro-jnr" target="_blank" title='Link para perfil do Linkedin' rel="noopener noreferrer"><FaLinkedin className='linkedin' /></a></li>

                <li><a href="https://github.com/Jjunior112" target="_blank" title='Link para perfil do GitHub' rel="noopener noreferrer" ><FaGithub className='github' /></a></li>

            </ul>
        </nav>
    )
}

export default NavBar