import React from 'react'
import { motion } from 'framer-motion'

const PageNotFound = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1>404</h1>
                <p>Página no encontrada</p>
            </motion.div>
        </>
    )
}

export default PageNotFound