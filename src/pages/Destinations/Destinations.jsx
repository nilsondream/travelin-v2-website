import React from 'react';
import { motion } from 'framer-motion'
import ScrollToTop from '../../components/ScrollToTop'
import './StyledDestinations.scss'
import Tabs from '../../components/Tabs/Tabs'
import All from '../../components/Categories/All';
import Cascadas from '../../components/Categories/Cascadas';
import Montañas from '../../components/Categories/Montañas';

const Destinations = () => {
    return (
        <>
            <ScrollToTop />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                <div className='destinations-page'>
                    <h1 className='title-page'>Explorar Destinos</h1>

                    <Tabs>
                        <div label="Todos">
                            <All />
                        </div>
                        <div label="Cascadas">
                            <Cascadas />
                        </div>
                        <div label="Montañas">
                            <Montañas />
                        </div>
                    </Tabs>
                </div>

            </motion.div>
        </>
    )
}

export default Destinations