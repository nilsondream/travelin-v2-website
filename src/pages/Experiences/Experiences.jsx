import React from 'react'
import { motion } from 'framer-motion'
import ScrollToTop from '../../components/ScrollToTop'
import './StyledExperiences.scss'

const Experiences = () => {
    return (
        <>
            <ScrollToTop />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className='experiences-page'><h1>Proximamente...</h1></div>
            </motion.div>
        </>
    )
}

export default Experiences