import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from 'react-icons/bs'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { FiHome, FiMap, FiNavigation, FiCamera } from "react-icons/fi";
import styled from 'styled-components'
import './StyledNavbar.scss'

const Navbar = () => {

    // open modal
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(!modal);

    // open sidebar
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    //scroll change color
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 50) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);

    //location change color
    const [navColor, setNavColor] = useState('#000');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setNavColor('#fff');
        } else {
            setNavColor('#000')
        }
    }, [location]);

    return (
        <>
            <Nav style={{ color: navColor }}>
                <motion.div className={color ? 'navbar navbar-scroll' : 'navbar'} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: 'easeInOut', duration: 1, delay: .25 }}>
                    <div className='nav-left'>
                        <NavLink to='/'>
                            <svg className='logo' xmlns='http://www.w3.org/2000/svg' width='40' height='41.019' viewBox='0 0 40 41.019'>
                                <path d='M26.6,34.961h0c.3-.338.563-.676.83-1.024C27.163,34.285,26.887,34.633,26.6,34.961Zm1.577-2.151c-.225.389-.481.758-.737,1.116.266-.358.512-.727.748-1.106Z' transform='translate(-9.836 -12.207)' fill='currentColor' />
                                <path d='M21.487.09C20.846.032,20.2,0,19.564,0H19.32A20.639,20.639,0,0,0,.95,11.883v.058l-.09.192c-.038.083-.071.167-.1.256l-.032.071a9.781,9.781,0,0,0,.032,7.275h0a9.832,9.832,0,0,0,16.5,2.788,9.614,9.614,0,0,0,.993-1.372l.109-.186-5.128-4a24.753,24.753,0,0,1,4.179,1.128h.051c.461.16.968.346,1.506.545l.641.25.494-.5a32.207,32.207,0,0,1,3.051-2.724,18.017,18.017,0,0,1,1.859-1.282,3.051,3.051,0,0,1,1.122-.468c.064.365-.538,1.686-2.186,3.7a30.331,30.331,0,0,1-2.429,2.666l-.519.506.276.641c.16.391.308.795.442,1.2a15.415,15.415,0,0,1,.91,4.416l-2.916-4.57-.212.282c-.353.474-.718.923-1.1,1.34A18.383,18.383,0,0,1,4.783,30.247H3.828a18.177,18.177,0,0,1-2.038-.224L1.3,29.913l.237.436A21.242,21.242,0,0,0,2.674,32.2,20.511,20.511,0,1,0,21.487.09ZM18.051,21.03h0c-.147.237-.3.468-.468.692A6.544,6.544,0,0,0,18.051,21.03Zm-.461.705c-.167.224-.333.436-.519.641h0C17.243,22.171,17.416,21.953,17.589,21.735Zm1.974,17.178a18.319,18.319,0,0,1-14.05-6.538,20.305,20.305,0,0,0,14-6.236L22.4,30.663l.859-.417c2.73-1.32,1.167-6.551.295-8.9,2.359-2.378,5.942-6.57,4.314-8.743a1.923,1.923,0,0,0-1.461-.788,3.429,3.429,0,0,0-1.436.276,9.723,9.723,0,0,0-1.75.936,28.727,28.727,0,0,0-3.98,3.237l-.16.154c-.442-.16-.859-.314-1.25-.442h-.038c-5.128-1.737-6.621-1.282-7.339-.679A1.558,1.558,0,0,0,9.9,16.755l.071.4L15.4,21.369A7.691,7.691,0,0,1,2.745,13.108c.051-.122.109-.244.167-.365l.032-.064A18.44,18.44,0,0,1,20.525,2.166a18.024,18.024,0,0,1,2.038.224,18.383,18.383,0,0,1-2.987,36.534Z' transform='translate(-0.04 0)' fill='currentColor' />
                            </svg>

                            Travelin
                        </NavLink>
                    </div>

                    <div className='nav-right'>
                        <NavLink exact activeClassName='active' to='/destinos'>Destinos</NavLink>
                        <NavLink exact activeClassName='active' to='/plan'>Planea tu viaje</NavLink>
                        <NavLink activeClassName='active' to='/tours'>Tours</NavLink>
                        <NavLink activeClassName='active' to='/experiences'>Experiencias</NavLink>
                        <BiUserCircle onClick={openModal} />
                    </div>

                    <div className='btn-mobile' onClick={showSidebar}><CgMenuRight /></div>
                </motion.div>
            </Nav>

            <div className={modal ? 'login-modal login-modal-active' : 'login-modal'}>
                <div className="login">
                    <span><MdClose onClick={openModal} /></span>
                    <h1>Bienvenido a Travelin</h1>
                    <button><BsFacebook /> Iniciar sesión con Facebook</button>
                    <button><FcGoogle /> Iniciar sesión con Google</button>
                    <p className='separation'>ó</p>
                    <form>
                        <input type="text" placeholder="Email" />
                    </form>
                    <form>
                        <input type="text" placeholder="Contraseña" />
                    </form>

                    <h3>Iniciar sesión</h3>
                </div>
            </div>

            <div className={sidebar ? 'sidebar-mobile sidebar-mobile-active' : 'sidebar-mobile'}>
                <div className='btn-mobile-close' onClick={showSidebar}><CgClose /></div>
                <div className="sidebar-links">
                    <NavLink exact activeClassName='active' to='/' onClick={showSidebar}><FiHome />Home</NavLink>
                    <NavLink activeClassName='active' to='/destinos' onClick={showSidebar}><FiNavigation />Destinos</NavLink>
                    <NavLink activeClassName='active' to='/tours' onClick={showSidebar}><FiMap />Tours</NavLink>
                    <NavLink activeClassName='active' to='/experiences' onClick={showSidebar}><FiCamera />Experiencias</NavLink>

                    <span className='span-line' />

                    <button className='btn-styled-3' onClick={showSidebar}>Iniciar sesión</button>
                </div>
            </div>
        </>
    )
}

const Nav = styled.nav`
    display: block;
`;

export default Navbar