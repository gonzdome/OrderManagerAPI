const { Menus } = require('../database/models');
const { handlePage } = require('../helpers/PaginationHelper');

const createMenu = async ({ name, description, price, category }) => {
    const menu = await Menus.create({ name, description, price, category });
    return { id: menu.id, name, description, price, category };
}

const getMenusByIds = async ({ ids }) => {
    const findMenusByIds = await Menus.findAll({ where: { id: ids } });
    return findMenusByIds;
}

const getMenuList = async ({ page, limit, category }) => {
    let search = { offset: page, limit: limit, };
    if (category != null) search.where = { category };

    const findMenuByEmail = await Menus.findAndCountAll(search);

    return {
        count: findMenuByEmail.count,
        page: handlePage(page),
        limit: limit,
        rows: findMenuByEmail.rows.map(r => ({    
            id: r.id,
            name: r.name,
            description: r.description,
            price: r.price.toString(),
            priceConverted: (r.price / 100).toFixed(2),
            category: r.category,
        }))
    };
}

module.exports = { createMenu, getMenusByIds, getMenuList };