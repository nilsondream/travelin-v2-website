import React from 'react'
import { motion } from 'framer-motion'
import './StyledPageNotFound.scss'

const PageNotFound = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className='page-not-found'>
                    <h1>404</h1>
                    <p>Página no encontrada</p>
                </div>
            </motion.div>
        </>
    )
}

export default PageNotFound