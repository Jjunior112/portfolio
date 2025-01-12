import { FaLinkedin, FaGithub, FaWhatsapp  } from 'react-icons/fa'

const NavBar = () => {
    return (
        <nav>
            <h1><span>= </span>Juarez Junior<span>;</span></h1>
            <ul>

                <li><a href="https://www.linkedin.com/in/juarez-junior112/" target="_blank" title='Link para perfil do Linkedin' rel="noopener noreferrer"><FaLinkedin className='linkedin' /></a></li>

                <li><a href="https://github.com/Jjunior112" target="_blank" title='Link para perfil do GitHub' rel="noopener noreferrer" ><FaGithub className='github' /></a></li>

                <li><a href="http://wa.me/5531982208900" target="_blank" title='Link para chat whatsapp' rel="noopener noreferrer" ><FaWhatsapp className='whatsapp' /></a></li>

            </ul>
        </nav>
    )
}

export default NavBar