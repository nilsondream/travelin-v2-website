import destinos from "../assets/data/destinos"

export const getProductCategory = (category) => {

    const validCategory = ['Cascada', 'Montaña'];

    if ( !validCategory.includes(category)) {
        throw new Error(`${category} no es un publisher válido`)
    }

    return destinos.filter(product => product.category === category);
}