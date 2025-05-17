## 

# Packages
---
### Express: To run the server
```
npm i express
```
---

### Nodemon: Restart automatically the server on save
```
npm i -d nodemon
```
---
### **Sequelize/Sequelize-CLI**: To deal with the Models/Migrations
```
npm i sequelize
npm i --save-dev sequelize-cli`
```
---
### PG/ PG-HSTORE: Postgres drivers for Sequelize
```
npm i --save pg pg-hstore
```
---
### Jest: for TDD
```
npm i --save-dev jest
```
---
### Sequelize-Mock: To mock Sequelize on tests
```
npm i --save-dev sequelize-mock
```
---
### package.json scripts:
```
run: "nodemon --inspect src/server.js",
run-migrations: "npx sequelize-cli db:migrate",
undo-migrations: "npx sequelize-cli db:migrate:undo",
test: "jest --forceExit"
```
---
# Methods
### <ins>Customer Registration</ins>: 
#### url: http://localhost:3000/customer
- body:
```
{
    "name" : "Random2",
    "email" : "Random2@test.com",
    "phone" : "14997654812"
}
```

### <ins>Adding Dishes to the Menu</ins>: 
#### url: http://localhost:3000/menu
- body:
```
{
    "name": "Menu_Test",
    "description": "Test description",
    "price": 2250,
    "category": "main_course"
}
```

### <ins>List the Menu</ins>: 
#### url: http://localhost:3000/menu?page=0&limit=3 (to search cathegory add: &category=dessert)

### <ins>Create an Order</ins>: 
#### url: http://localhost:3000/order
- body:
```
{
    "customer_id": 1,
    "items": [
        {
            "menu_item_id": 1,
            "quantity": 1
        },
        {
            "menu_item_id": 2,
            "quantity": 1
        }
    ]
}
```

### <ins>List Orders by Customer with pagination</ins>: 
#### url: http://localhost:3000/order?page=0&limit=10

### <ins>Update Order Status</ins>: 
#### url: http://localhost:3000/order/1
- body:
```
{
    "status": "preparing"
}
```

### <ins>Modify an Order</ins>: 
#### url: http://localhost:3000/order/modify/1
- body:
```
{
    "items": [
        {
            "menu_item_id": 1,
            "quantity": 10
        }
    ]
}
```
