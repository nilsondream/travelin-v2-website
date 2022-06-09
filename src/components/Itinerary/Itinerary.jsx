import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { getProductSlug } from '../../selectors/getProductSlug';
import { NavLink, useParams } from 'react-router-dom';
import { BsStarFill, BsClock, BsChevronLeft } from 'react-icons/bs';
import { GrGroup } from 'react-icons/gr';
import { AiOutlineCar } from 'react-icons/ai';
import ScrollToTop from '../ScrollToTop';
import './StyledItinerary.scss'

const Itinerary = () => {

    const { slug, slug_agency } = useParams();
    const destino = useMemo(() => getProductSlug(slug, slug_agency), [slug, slug_agency]);

    return (
        <>
            <ScrollToTop />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className='destination-info' key={destino.id}>
                    <div className="destination-header">
                        <NavLink to={'/destinos'}><BsChevronLeft />Atrás</NavLink>
                        <h1>{destino.name}, {destino.place}</h1>
                    </div>
                    <p className='destination-subtitle'><BsStarFill />{destino.rating} · {destino.agency}</p>
                    <div className='destination-img'>
                        <img src={destino.img} alt={destino.name} />
                        <img src={destino.img} alt={destino.name} />
                    </div>
                    <div className="destination-content">
                        <div className="destination-data">
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
                                galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                            </p>
                            
                            <span className='span-line' />

                            <div className="data-cards">
                                <div className="cards">
                                    <BsClock />
                                    <div className='cards-desc'>
                                        <p>Duración</p>
                                        <span>2 - 5 Horas</span>
                                    </div>
                                </div>
                                <div className="cards">
                                    <GrGroup />
                                    <div className='cards-desc'>
                                        <p>Grupo</p>
                                        <span>10 - 15 Personas</span>
                                    </div>
                                </div>
                                <div className="cards">
                                    <AiOutlineCar />
                                    <div className='cards-desc'>
                                        <p>Transporte</p>
                                        <span>Minivan</span>
                                    </div>
                                </div>
                            </div>

                            <span className='span-line' />

                            <div className="data-services">
                                <h1>Acerca de</h1>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
                                    electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con 
                                    la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más 
                                    recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye 
                                    versiones de Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className="destination-buy">
                            <button className='btn-styled-5'>Comprar destino</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Itinerary