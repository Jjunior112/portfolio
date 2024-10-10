

const Project = ({   name, description}) => {

    return (
        <div className='project' >

            <h2>{name}</h2>

            <div className='description' >

                <p>{description}</p>

            </div>

           
        </div>

    )

}

export default Project