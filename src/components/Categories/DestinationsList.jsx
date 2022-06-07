import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { getProductCategory } from '../../selectors/getProductCategory';
import DestinationItem from './DestinationItem';
import './StyledCategories.scss'

const DestinationsList = ({ category }) => {

    const destinos = getProductCategory(category);

    const [searchText, setSearchText] = useState('');
    const [destinationsData, setDestinationData] = useState(destinos);
    useEffect((destinos) => {
        if (searchText === '') return;
        setDestinationData(() =>
            destinos.filter((destino) =>
                destino.name.toLowerCase().match(searchText.toLowerCase())
            )
        );
    }, [searchText]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
        if (!e.target.value.length > 0) {
            setDestinationData(destinos);
        }
    };

    return (
        <>
            <div className='destinations-searchbar'>
                <form>
                    <input type='text' value={searchText} onChange={handleChange} placeholder='Buscar destino' />
                    <FiSearch />
                </form>
            </div>

            <div className='category-container'>
                {
                    destinationsData.map(destino => {
                        return (
                            <DestinationItem key={destino.id} {...destino}/>
                        );
                    })
                }
            </div>
        </>
    )
}

export default DestinationsList