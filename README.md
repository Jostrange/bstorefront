# BstoreFront


Bamazon is a command line interface application built with  [Node.js](https://nodejs.org/en/). In the Customer View, you can place fictional orders. 

**Where to begin


**1. Clone the Repository**

```
git clone https://github.com/Jostrange/bamazon.git
```

**2. Go to Repository**

```
cd bamazon
```

**3. Install Dependencies**

```
npm install
```

**4. Connect to Database 

Follow directions on which db to connect to along with the seed data in the file

```
use `bamazon.sql`
```

**4A 

```
seed data into database
```

**5. Run Customer View**

You will need the password for this

```
node bamazonCustomer.js
```
_______________________________________________________________________________________________
## Rundown of Bamazon

### Customer View

To begin the experience, run `node bamazonCustomer.js`. The app will show a list of each products for sale and prompt the customer for an order.

The app fulfills the customer's order by asking for the product's ID and how many units the customer wants to order. 
You will see the prompt at the top of the application 

"What is the ID of the product you would like to purchase?"
![enter image description here](https://i.imgur.com/RhRBz6N.jpg)

If the order has enough units available the order will display that it is fulfilled. It will also display the remaining quantity along with the total price.
![enter image description here](https://i.imgur.com/hB5BkIf.jpg)

If there is insufficient quantity, the order will not process and the customer will see the message stating "Insufficient order sorry!".

![enter image description here](https://i.imgur.com/AesWLjR.jpg)

