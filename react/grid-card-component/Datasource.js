import data from "./data";

/**
 * Get tag list from card's data
 * @param {array} data 
 * @returns array
 */
const getTags = (data) => {
    // Get cards
    const cards = getCards(data);
    // Get all tags from cards
    const filtered = cards.map(card => card.tags);
    // Flat multidimentional array
    const flatten =  [].concat(...filtered);
    // Cast each item
    const casted = flatten.map( tag => tag.toLowerCase());
    // Delete dupes and sort alphabetically
    return [...new Set(casted)].sort((a, b) => (a > b) * 2 - 1)
}

/**
 * Get card list from card's data
 * @param {array} data 
 * @returns array
 */
const getCards = (data) => {
    return data.cards;
}

const Datasource = {
    "GET_CARDS": getCards(data),
    "GET_TAGS": getTags(data),
}

export default Datasource;



