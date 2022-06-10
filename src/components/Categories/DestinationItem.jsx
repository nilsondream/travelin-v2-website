import React from 'react'
import { Link } from 'react-router-dom'
import { BsHeart } from 'react-icons/bs';

const DestinationItem = ({ id, slug, name, place, slug_agency, agency, price, img }) => {
    return (
        <>
            <Link to={`/${slug_agency}/${slug}`}>
                <div className='destino-item' key={id}>
                    <div className='destino-img'>
                        <img src={img} alt={name} />
                        <span><BsHeart /></span>
                    </div>
                    <div className='destino-data'>
                        <div className='data-top'>
                            <p>{name}, {place}</p>
                        </div>
                        <div className='data-center'>
                            <p>{agency}</p>
                        </div>
                        <div className='data-bottom'>
                            <p>s/ {price}</p>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default DestinationItem