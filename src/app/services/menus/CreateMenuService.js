const MenuRepository = require('../../repositories/MenuRepository')

module.exports = async (request) => {
    const { name, description, price, category } = request.body;

    var menu = await MenuRepository.createMenu({ name, description, price, category });
    return menu;
};