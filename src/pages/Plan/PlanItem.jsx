import React from 'react'
import { useCart } from "react-use-cart"
import destinos from '../../assets/data/destinos'
import Gradient from '../../components/Gradient'
import { MdAdd } from "react-icons/md"

const PlanItem = () => {

    const { addItem } = useCart();

    return (
        <>
            <div className="items-grid">
                {
                    destinos.map((item, index) => {
                        return (
                            <div className="item-container" key={index}>
                                <img src={item.img} alt={item.name} />
                                <Gradient />
                                <div className='item-data'>
                                    <h2>{item.name}</h2>
                                    <MdAdd onClick={() => addItem(item)} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PlanItem