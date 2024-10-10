import React from 'react'

const Profile = () => {
    return (
        <main>
            <section id='home' className='profile'>


                <div className='name' >

                    <h2>Frontend Developer</h2>

                    <p>Tenho 24 anos, sou Frontend developer, tenho uma paixão pela criação de soluções digitais inovadoras e funcionais. Tenho habilidades em JavaScript,React JS, Node JS, criação e integração de APIs usando express js, bancos de dados relacionais e não relacionais. </p>

                    <a>Contact me</a>
                </div>

            </section>

            <section className='photo'>
                <img src="profile.png" alt="foto de perfil" />


            </section >

        </main>
    )
}

export default Profile