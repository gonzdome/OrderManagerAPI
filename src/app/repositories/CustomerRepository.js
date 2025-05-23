const { QueryTypes } = require('sequelize');
const { Customers, Orders, OrderItems, Menus, sequelize } = require('../database/models');
const { handlePage, paginateItems } = require('../helpers/PaginationHelper');

const createCustomer = async ({name, email, phone}) => {
    const customer = await Customers.create({ name, email, phone });
    return { id: customer.id, name, email, phone };
}

const getCustomerByEmail = async ({ email }) => {
    const findCustomerByEmail = await Customers.findOne({ where: { email } }) ?? null;
    return findCustomerByEmail;
}

const getCustomerById = async ({ id }) => {
    const findCustomerById = await Customers.findOne({ where: { id } }) ?? null;
    return findCustomerById;
}

const getCustomerOrdersByCustomerId = async ({ page, limit, customer_id = null }) => {
    const query = `SELECT O.ID AS ORDERID,
                          O.STATUS AS ORDERSTATUS,
                          OI.QUANTITY AS QUANTITY,
                          M.NAME AS MENUORDEREDDISH,
                          M.PRICE AS MENUPRICE
                     FROM public."OrderItems" OI
               INNER JOIN public."Orders" O ON OI.ORDER_ID = O.ID
               INNER JOIN public."Menus" M ON OI.MENU_ITEM_ID = M.ID
                    WHERE O.CUSTOMER_ID = ${customer_id};`;
    
    const options = {
        type: QueryTypes.SELECT,
        model: OrderItems, Orders, Menus
    };
    
    const findCustomerOrdersById = await sequelize.query(query, options);
    const totalValue = findCustomerOrdersById.map(cO => (cO.dataValues.menuprice * cO.dataValues.quantity)).reduce((partialSum, a) => partialSum + a, 0);
    
    const mappedRows = findCustomerOrdersById.map(cO => ({
        orderId: cO.dataValues.orderid,
        orderStatus: cO.dataValues.orderstatus,
        menuOrderedDish: cO.dataValues.menuordereddish,
        quantity: cO.dataValues.quantity,
        menuIndividualItemPrice: ((cO.dataValues.menuprice) / 100).toFixed(2),
        totalValue: ((cO.dataValues.menuprice * cO.dataValues.quantity) / 100).toFixed(2),
    }));

    return {
        count: findCustomerOrdersById.length,
        page: handlePage(page),
        limit: limit,
        totalValue: totalValue.toString(),
        totalValueConverted: (totalValue / 100).toFixed(2),
        rows: paginateItems(page, limit, mappedRows)
    };
}

module.exports = { createCustomer, getCustomerByEmail, getCustomerById, getCustomerOrdersByCustomerId };