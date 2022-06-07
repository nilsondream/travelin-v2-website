import React, { useEffect, useRef } from 'react';
import gsap, { Expo } from 'gsap';
import { motion } from 'framer-motion'
import ScrollToTop from '../../components/ScrollToTop'
import Recomend from '../../components/HomeComponents/Recomend';
import img1 from '../../assets/images/hero-01.webp'
import './StyledHome.scss'
import Experiences from '../../components/HomeComponents/Experiences';

const Home = () => {

    let img = useRef(null);
    let title1 = useRef(null);
    let title2 = useRef(null);
    let title3 = useRef(null);
    let text = useRef(null);
    let btn = useRef(null);
    let supp = useRef(null);

    const timeline_home = gsap.timeline();

    useEffect(() => {
        timeline_home.from([img], { opacity: 0, scale: 1.5, duration: 1.5, ease: Expo.easeOut });
        timeline_home.from([title1, title2, title3], { opacity: 0, y: 70, duration: 1, delay: -.75, ease: Expo.easeOut, stagger: { amount: .25 } });
        timeline_home.from([supp, text, btn], { opacity: 0, x: -50, duration: 1, delay: -.75, ease: Expo.easeOut, stagger: { amount: .25 } });
    });

    return (
        <>
            <ScrollToTop />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className='section-page'>
                    <div className="landing-page">
                        <img src={img1} alt="landingpage" ref={el => img = el}/>
                        <div className='landing-top'>
                            <h1 ref={el => title1 = el}>Descubramos</h1>
                            <h1 ref={el => title2 = el}>el mundo</h1>
                            <h1 ref={el => title3 = el}>juntos</h1>
                        </div>

                        <div className='landing-bottom'>
                            <a href="/" ref={el => supp = el}>travelinsupport@gmail.com</a>
                            <div className='bottom-text'>
                                <p ref={el => text = el}>
                                    Bienvenido a travelin, registrate y descubre
                                    todas las novedades y beneficios de unirte a 
                                    nuestra comunidad.
                                </p>
                                <button className='btn-styled-1' ref={el => btn = el}>Planea tu viaje</button>
                            </div>
                        </div>
                    </div>

                    <Recomend />

                    <Experiences />

                </div>
            </motion.div>
        </>
    )
}

export default Home