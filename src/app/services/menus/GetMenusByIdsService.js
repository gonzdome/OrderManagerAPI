const MenuRepository = require('../../repositories/MenuRepository')

module.exports = async (ids) => {    
    var menu = await MenuRepository.getMenusByIds({ ids });
    return menu;
};