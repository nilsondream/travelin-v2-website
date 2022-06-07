import React, { useRef, useEffect } from 'react';
import gsap, { Expo } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import img1 from '../../assets/images/hero-03.jpg'
import img2 from '../../assets/images/hero-04.jpg'
import './StyledHomeComponents.scss'
import { NavLink } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger)

const Experiences = () => {

    const titleexperienceref = useRef(null);
    const experienceref1 = useRef(null);
    const experienceref2 = useRef(null);

    useEffect(() => {
        const titleexperience = titleexperienceref.current;
        const experience1 = experienceref1.current;
        const experience2 = experienceref2.current;
        gsap.fromTo(titleexperience, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: Expo.easeOut, scrollTrigger: { trigger: titleexperience } });
        gsap.fromTo(experience1, { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 1, ease: Expo.easeOut, scrollTrigger: { trigger: experience1 } });
        gsap.fromTo(experience2, { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 1, delay: .2, ease: Expo.easeOut, scrollTrigger: { trigger: experience2 } });
    })

    return (
        <>
            <div className="experience-home">
                <h1 ref={titleexperienceref}>Actividades que podrás realizar en grupo con tus amigos</h1>
                <div className='experience-grid'>
                    <div className="experience-item" ref={experienceref1}>
                        <img src={img1} alt="" />
                        <div className='item-data'>
                            <h1>Campings<br />Tours<br />Comida local<br />Fogatas</h1>
                            <NavLink to={'/tours'}><button className='btn-styled-3'>Explorar tours</button></NavLink>
                        </div>
                    </div>

                    <div className="experience-item" ref={experienceref2}>
                        <img src={img2} alt="" />
                        <div className='item-data'>
                            <h1>Fotografías y videos para todas tus redes sociales.</h1>
                            <NavLink to={'/experiences'}><button className='btn-styled-4'>Experiencias</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experiences