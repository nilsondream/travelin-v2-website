import React from 'react'
import { useCart } from "react-use-cart";
import { BiTrash } from "react-icons/bi";

const PlanCart = () => {

    const { isEmpty, totalUniqueItems, items, removeItem, cartTotal, emptyCart } = useCart();

    if (isEmpty) return <div className="empty-cart"><h1>Agregue destinos a su plan de viaje</h1></div>;

    return (
        <>
            <div className="plan-cart">
                <h1>Destinos escogidos ({totalUniqueItems})</h1>

                {
                    items.map((item, index) => {
                        return (
                            <div className="trip-item" key={index}>
                                <img src={item.img} alt={item.name} />
                                <div className="trip-data">
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.place}</p>
                                    </div>
                                    <h4>s/ {item.price}</h4>
                                    <button onClick={() => removeItem(item.id)}><BiTrash /></button>
                                </div>
                            </div>
                        )
                    })
                }

                <div className="total-trip">
                    <h1>Total: s/ {cartTotal}</h1>
                    <button onClick={() => emptyCart()}>Borrar todo</button>
                </div>
            </div>
        </>
    )
}

export default PlanCart