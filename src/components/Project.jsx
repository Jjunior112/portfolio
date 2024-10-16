import { FaGithub } from 'react-icons/fa'
import { RiEarthFill } from "react-icons/ri";

const Project = ({ name, image, description,linkGithub,linkSite }) => {

    return (
        <div className='project' >

            <h2>{name}</h2>

            <img src={image} alt="" />

            <div className='description' >

                <p>{description}</p>

            </div>
            <div >
                <a href={linkGithub} target="_blank" rel="noopener noreferrer"><FaGithub className='github' /></a>
                <a href={linkSite} target="_blank" rel="noopener noreferrer"><RiEarthFill className='site' /></a>
            </div>

        </div>

    )

}

export default Project