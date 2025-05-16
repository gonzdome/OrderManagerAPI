const HandleErrorHelper = require("../../helpers/HandleErrorHelper");
const { notFound } = require("../../../utils/Messages");

module.exports = async (items, itemsListed) => {
    const itemsMapped = items.map(i => i.menu_item_id );
    const itemsListedMapped = itemsListed.map(i => i.id );
    
    const menuItemNotFound = itemsMapped.filter(i => !itemsListedMapped.includes(i)).map(i => ({ menu_item_id: i}))

    if (items.length != itemsListed.length) throw await HandleErrorHelper(notFound(), notFound('Menu Item'), 404, menuItemNotFound);
}