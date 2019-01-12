var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Madeline55!",
    database: "bamazon"
});



//  If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
// function selects all inventory
function showInventory() {
    connection.query('SELECT id, product_name, stock_quantity, price FROM products', (error, results) => {
        if (error) {
            return console.log("error with inventory");
        } else console.log("success!")

        results.forEach(result => {
            console.log(`${result.product_name}`);
            console.log(`stock_quantity ${result.stock_quantity}\n`)
            console.log(`id ${result.id} | price ${result.price.toFixed(2)}\n`)

        });
    })
}
//  If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
// this is the function that will allow the user to see low inventory
function viewLowInventory() {
    connection.query('SELECT id, product_name, stock_quantity, price FROM products WHERE stock_quantity < 6', (error, results) => {
        if (error) {
            return console.log("error with low inventory");
        } else console.log("yeah!");

        results.forEach(result => {
            console.log(`${result.product_name}`);
            console.log(`stock_quantity ${result.stock_quantity}\n`);

        })
    })
}

//  If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
// this is the function that allows the user to add into existing inventory to increase inventory amount
function addMoreInventory(productId, quantity){
    connection.query(`UPDATE products SET stock_quantity = stock_quantity + ${quantity} WHERE id = ${productId}`)
    if (error){
        return console.log("nope")
    } else console.log("Quantity added!") 
   
}

function inquireAndAddMoreInventory(){
    var inputQuestions = [{
        type: "input",
        name: "id",
        message: "Enter the product ID"
    },
    {
        type: "input",
        name: "quantity",
        message: "How many units do you want to add? (Enter a number)",
        validate: function (value) {
            if (value.match(/^|d+$/) && parseInt(value) > 0 && parseInt(value)) {
                return true;
            } return false;
        }
    }
        
    ] 
    inquirer.prompt(inputQuestions).then(answers => {
        console.log(answers);
    })
}

function addMoreProducts(){
    var inputProductQuestion = [{
        type: "input",
        name: "id",
        message: "Enter the product name"
    },
        
    ] 
    
    inquirer.prompt(inputProductQuestions).then(answers => {
        console.log(answers);
    })

//  If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.
function addNewProduct(productId, product_name){
    connection.query(`UPDATE products SET product_name + ${product_name} WHERE id = ${productId}`)
    if (error){
        return console.log("nope")
    } else console.log("new product added!") 
   
}


var showMenu = function () {
    var menuQuestions = [
        {
            type: "list",
            name: "id",
            message: "Choose what you would like to do:",
            choices: ["View products for sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
           


            validate: function (value) {
                console.log(value);
                if (value.match(/^\d+$/)) {
                    return true;
                } return false;
            }
        },

    ]
    inquirer.prompt(menuQuestions).then(answers => {
        console.log(answers);
        switch (answers.id) {
            case "View products for sale":
                return showInventory();
            case "View Low Inventory":
                return viewLowInventory();
            case "Add to Inventory":
            return inquireAndAddMoreInventory();
            case "Add New Product":
            return addNewProduct();
        }
    })

};

var openStore = function () {

    connection.connect((error) => {
        if (error) {
            return console.log("Error connecting to bamazon.");
        }
        showMenu();
    });
}
openStore();