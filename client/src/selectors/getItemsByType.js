const { items } = require("../data/items");

export const getItemsByType = (type)=>{

    const validTypes =['rate','rate'];

    if (!validTypes.includes(type)) {
        throw new Error(`Types ${type} no es correcto`);
    }

    return items.filter(element => element.type === type);
}