import { items } from "../data/items"

export const getItemsByName = (title ='') => {

    console.log('en el selector', title);
    if (title ==='') {
        return[];
    }
    title = title.toLowerCase();
    return items.filter(x => x.superhero.toLowerCase().includes(title));
}
