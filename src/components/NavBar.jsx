import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'

const NavBar = () => {
    return (
        <nav>
            <h1>Juarez Junior</h1>
            <ul>

                <li><a href="https://www.linkedin.com/in/juarez-gonzaga-de-castro-jnr" target="_blank" title='Link para perfil do Linkedin' rel="noopener noreferrer"><FaLinkedin className='linkedin' /></a></li>

                <li><a href="https://github.com/Jjunior112" target="_blank" title='Link para perfil do GitHub' rel="noopener noreferrer" ><FaGithub className='github' /></a></li>

                <li><a href="https://jjunior112.github.io/portfolioDev/Curriculo.pdf" download='curriculo.pdf' title='Link para download do curriculo em pdf' rel="noopener noreferrer"><FaFileDownload className='download' /></a></li>

            </ul>
        </nav>
    )
}

export default NavBar