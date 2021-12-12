import client from "./client";

// db save
export const dbmenuSave = ({
    menuname,
    main,
    description,
    main_ingredient,
    main_ingredient_weight,
    ingredientArray,
    ingredientWeightArray,
    category,
    cook_type,
    sauce_base,
    country }) => client.post('/api/menusave/register', {
        menuname, main, description, main_ingredient, main_ingredient_weight, ingredientArray, ingredientWeightArray, category, cook_type, sauce_base, country })

export const priceSave = (data) => {
    client.post('/api/menusave/pricesave', data);
};