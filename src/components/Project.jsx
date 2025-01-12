import { FaGithub,FaImage  } from 'react-icons/fa'


const Project = ({ name, image, description,linkGithub/*linkImage*/ }) => {

    return (
        <div className='project' >

            <h2>{name}</h2>
            
            <img src={image} alt="" />

            <div className='description' >

                <p>{description}</p>

            </div>
            <div >
                <a href={linkGithub} target="_blank" rel="noopener noreferrer"><FaGithub className='github' /></a>
                {/* <a href={linkImage} target="_blank" rel="noopener noreferrer"><FaImage  className='github' /></a> */}
                
            </div>

        </div>

    )

}

export default Project