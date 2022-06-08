import React from 'react'
import { Link } from 'react-router-dom'
import { BsStar } from "react-icons/bs";

const DestinationItem = ({ id, slug, name, slug_agency, agency, price, rating, img }) => {
    return (
        <>
            <Link to={`/${slug_agency}/${slug}`}>
                <div className="destino-item" key={id}>
                    <div className="destino-img">
                        <img src={img} alt={name} />
                    </div>
                    <div className="destino-data">
                        <div className="data-top">
                            <h2>{name}</h2>
                            <p>{rating} <BsStar /></p>
                        </div>
                        <div className="data-bottom">
                            <p>{agency}</p>
                            <span>{price}</span>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default DestinationItem