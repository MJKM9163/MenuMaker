import client from "./client";

// db save
export const dbmenuSave = ({
    menuname,
    main,
    description,
    main_ingredient,
    ingredient,
    category,
    cook_type,
    sauce_base }) => client.post('/api/menusave/register', {
        menuname, main, description, main_ingredient, ingredient, category, cook_type, sauce_base })
                        

// const MenuSchema = new Schema ({
//     menuname: String,
//     image: Buffer,
//     description: String,
//     main_ingredient: String,
//     ingredient: [String],
// });
