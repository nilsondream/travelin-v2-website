import React from 'react'
import { CartProvider } from 'react-use-cart'
import { motion } from 'framer-motion'
import PlanItem from './PlanItem'
import ScrollToTop from '../../components/ScrollToTop'
import './StyledPlan.scss'
import PlanCart from './PlanCart'

const Plan = () => {
    return (
        <>
            <ScrollToTop />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <CartProvider>
                    <div className="plan-page">
                       <PlanItem />
                       <PlanCart /> 
                    </div>
                </CartProvider>
            </motion.div>
        </>
    )
}

export default Plan