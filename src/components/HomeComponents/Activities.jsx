import React, { useRef, useEffect } from 'react';
import gsap, { Expo } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import img1 from '../../assets/images/hero-03.jpg'
import img2 from '../../assets/images/hero-04.jpg'
import './StyledHomeComponents.scss'
import { NavLink } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger)

const Activities = () => {

    const titleactivitiesref = useRef(null);
    const activitiesref1 = useRef(null);
    const activitiesref2 = useRef(null);

    useEffect(() => {
        const titleactivities = titleactivitiesref.current;
        const activities1 = activitiesref1.current;
        const activities2 = activitiesref2.current;
        gsap.fromTo(titleactivities, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: Expo.easeOut, scrollTrigger: { trigger: titleactivities } });
        gsap.fromTo(activities1, { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 1, ease: Expo.easeOut, scrollTrigger: { trigger: activities1 } });
        gsap.fromTo(activities2, { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 1, delay: .1, ease: Expo.easeOut, scrollTrigger: { trigger: activities2 } });
    })

    return (
        <>
            <div className='activities-home'>
                <div className='activities-title' ref={titleactivitiesref}>
                    <h1>Actividades que podrás realizar en grupo con tus amigos</h1>
                    <p>Busca y sugiere las mejoras rutas para ti, anímate a ser el arquitecto de tus propias aventuras.</p>
                </div>
                <div className='activities-grid'>
                    <div className='activities-item' ref={activitiesref1}>
                        <img src={img1} alt='' />
                        <div className='item-data'>
                            <h1>Rutas<br />Campings<br />Fogatas<br />Comida local</h1>
                            <NavLink to={'/tours'}><button className='btn-styled-3'>Explorar tours</button></NavLink>
                        </div>
                    </div>

                    <div className='activities-item' ref={activitiesref2}>
                        <img src={img2} alt='' />
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

export default Activities