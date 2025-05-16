const MenuRepository = require('../../repositories/MenuRepository')

module.exports = async (request) => {
    const { page = 0, limit = 10, category } = request.query;
    
    if (parseInt(page) != 0) page -= 1;

    const menu = await MenuRepository.getMenuList({ page: parseInt(page), limit: parseInt(limit), category });

    return menu;
};