var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});




//function select inventory
function showInventory() {
    connection.query('SELECT id, product_name, price FROM products', (error, results) => {
        if (error) {
            return console.log("error with inventory");
        } else console.log("")

        results.forEach(result => {
            console.log(`${result.product_name}`);
            console.log(`id ${result.id} | price ${result.price.toFixed(2)}\n`)

        });


    })
}
function fulfillOrder(product_id, quantity) {
    console.log(product_id, quantity);
    connection.query(`SELECT id, stock_quantity, price FROM products WHERE id = ${product_id}`, (error, results) => {

        console.log(results, error);
        var product = results[0];
        if (product.stock_quantity >= quantity) { //this checks the inventory against the input answer
            //calculate the remaining quantity after fulfilling this order
            var remainingQuantity = product.stock_quantity - quantity;
            console.log("Remaining Quantity: " + remainingQuantity)
            //calculate price of order
            var priceOfOrder = product.price * quantity;
            console.log("Total " + priceOfOrder);

            //update SQL Database for quantity to reflect orders
            connection.query(`UPDATE products SET stock_quantity = ${remainingQuantity} WHERE id  = ${product_id}`)
            return console.log("Quantity satisfied!")
        } console.log("Insufficient quantity sorry!")
        return false;




    })
    //things needed still
    // var updatedItemQuantity = res[0].stock_quantity - answer.quantity; - done
    //update quantity in MYSQL to reflect rest[0].stock_quantity = stock_quantity - answer.quantity - done
    // select id FROM product_name  WHERE res[0].price * answer.quantity) done



}

// run the start function after the connection is made to prompt the user
var startOrder = function (orderQuestions) {
    var orderQuestions = [
        {
            type: "input",
            name: "id",
            message: "What is the ID of the product you would like to purchase?, (insert the numerical ID 100-109)",

            validate: function (value) {
                if (value.match(/^\d+$/)) {
                    return true;
                } return false;
            }

        },
        {
            type: "input",
            name: "quantity",
            message: "How many units would you like to order? (Enter a number)",
            validate: function (value) {
                if (value.match(/^|d+$/) && parseInt(value) > 0 && parseInt(value)) {
                    return true;
                } return false;
            }
        }
    ]
    inquirer.prompt(orderQuestions).then(answers => {
        console.log(answers);
        var productId = parseInt(answers.id);
        const quantity = parseInt(answers.quantity)
        fulfillOrder(productId, quantity);


    });
}

var openStore = function () {

    connection.connect((error) => {
        if (error) {
            return console.log("Error connecting to bamazon.");
        }

        //inventory 
        showInventory();
        startOrder();
    });
}

openStore();

