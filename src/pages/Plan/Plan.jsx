import React from 'react'
import { motion } from 'framer-motion'
import ScrollToTop from '../../components/ScrollToTop'
import './StyledPlan.scss'

const Plan = () => {
    return (
        <>
            <ScrollToTop />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="plan-page">
                    <h1>Plan your trip... (programming)</h1>
                </div>
            </motion.div>
        </>
    )
}

export default Plan