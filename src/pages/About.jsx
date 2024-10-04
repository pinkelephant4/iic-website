import React from 'react'
import ComingSoon from '../components/ComingSoon'


const About = ({ setActive }) => {
    setActive("about")

    return (
        <>
            <ComingSoon />
        </>
    )
}

export default About