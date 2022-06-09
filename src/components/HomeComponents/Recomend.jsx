import React, { useRef, useEffect } from 'react';
import gsap, { Expo } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { MdOutlinePlace } from 'react-icons/md';
import destinos from '../../assets/data/destinos'
import Gradient from '../Gradient';
import './StyledHomeComponents.scss'
import { NavLink } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger)

const Recomend = () => {

    const titlerecomendref = useRef(null);
    const recomendref = useRef(null);

    useEffect(() => {
        const titlerecomend = titlerecomendref.current;
        const recomend1 = recomendref.current;
        gsap.fromTo(titlerecomend, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: Expo.easeOut, scrollTrigger: { trigger: titlerecomend } });
        gsap.fromTo(recomend1, { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 1, ease: Expo.easeOut, scrollTrigger: { trigger: recomend1 } });
    })

    return (
        <>
            <div className='destinos-home'>
                <div className='recomend-title' ref={titlerecomendref}>
                    <div className='title-grid'>
                        <h1>Destinos más recomendados</h1>
                        <NavLink to={'/destinos'}>Ver todo</NavLink>
                    </div>
                    <p>Explora precios, califíca la experiencia del viaje, recomienda los mismos y más.</p>
                </div>
                <div className='destinos-content' ref={recomendref}>
                    <Splide options={{ perPage: 4, perMove: 1, breakpoints: { 640: { perPage: 1, gap: 20 } }, arrows: false, pagination: false, gap: 16, type: 'loop', autoplay: true }}>
                        {destinos.map((destino, index) => {
                            return (
                                <SplideSlide key={index}>
                                    <div className='destino-item'>
                                        <img src={destino.img} alt={destino.name} />
                                        <Gradient />
                                        <div className='destino-data'>
                                            <h2>{destino.name}</h2>
                                            <p><MdOutlinePlace />{destino.place}</p>
                                        </div>
                                    </div>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>
            </div>
        </>
    )
}

export default Recomend