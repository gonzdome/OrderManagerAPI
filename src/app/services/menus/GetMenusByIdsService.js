const MenuRepository = require('../../repositories/MenuRepository')

module.exports = async (ids) => {    
    const menu = await MenuRepository.getMenusByIds({ ids });
    return menu;
};