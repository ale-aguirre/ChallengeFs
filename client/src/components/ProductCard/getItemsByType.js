const { items } = require("../../data/items");

export const getItemsByType = (type)=>{

    return items.filter(element => element.type === type);
}