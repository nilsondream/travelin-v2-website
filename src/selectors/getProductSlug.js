import destinos from "../assets/data/destinos"

export const getProductSlug = (slug = '') => {
    return destinos.find(destinations => destinations.slug === slug);
}