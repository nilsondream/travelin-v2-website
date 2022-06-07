import React from 'react'
import { motion } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import destinos from '../../assets/data/destinos'
import './StyledTours.scss'
import ScrollToTop from '../../components/ScrollToTop';

const Tours = () => {

    return (
        <>
            <ScrollToTop />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="tours-page">
                    <div className="destinations-hero">
                        <h1>Descubre los mejores tours que tenemos preparados para ti</h1>
                        <div className="destinations-slide">
                            <Splide options={{ perPage: 5, autoScroll: { speed: 2, pauseOnHover: false }, arrows: false, pagination: false, drag: 'free', gap: 20, breakpoints: { 640: { gap: 10, perPage: 3 } }, type: 'loop', focus: 'center', }} extensions={{ AutoScroll }}>
                                {destinos.map((destino, index) => {
                                    return (
                                        <SplideSlide key={index}>
                                            <div className="destino-item">
                                                <img src={destino.img} alt={destino.name} />
                                            </div>
                                        </SplideSlide>
                                    );
                                })}
                            </Splide>
                        </div>
                        <p>Explora precios, califíca la experiencia del viaje, recomienda los mismos y más.</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Tours