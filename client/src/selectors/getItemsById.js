const { items } = require("../data/items");

export const getItemsById = (id) => {

    return items.find(element => element.id === id);
}