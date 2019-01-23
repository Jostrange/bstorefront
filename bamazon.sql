
-- this is the schema

CREATE database bamazon

USE bamazon;

CREATE TABLE Products(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name varchar(100),
department_name varchar(100),
stock_quantity  integer(11),
price decimal(10, 1),
PRIMARY KEY (id) 
);


-- this is the seed data to fill in the appropriate dataset

INSERT INTO Products (id, product_name, department_name, stock_quantity, price) values ('100', 'tommy bahama shirt', 'menswear', 500, 150);
INSERT INTO Products (id, product_name, department_name, stock_quantity, price) values ('101', 'michael kors shirt', 'womens', 500, 60);
INSERT INTO Products (id, product_name, department_name, stock_quantity, price) values ('102', 'nike frees mens', 'mens shoes', 300, 200);
INSERT INTO Products (id, product_name, department_name, stock_quantity, price) values ('103', 'adidas shoes womens', 'womens shoes', 450, 150);
INSERT INTO Products (id, product_name, department_name, stock_quantity, price) values ('104', 'celine Purse', 'handbags', 100, 3000);
INSERT INTO Products (id, product_name, department_name, stock_quantity, price) values ('105', 'gucci wallet mens', 'handbags', 500, 2000);
INSERT INTO Products (id, product_name, department_name, stock_quantity, price) values ('106', 'nike hat unisex', 'menswear', 500, 50);
INSERT INTO Products (id, product_name, department_name, stock_quantity, price) values ('107', 'Burberry trench coat mens', 'menswear', 500, 1500);
INSERT INTO Products (id, product_name, department_name, stock_quantity, price) values ('108', 'coach gloves unisex', 'womens', 500, 75);
INSERT INTO Products (id, product_name, department_name, stock_quantity, price) values ('109', 'rolex', 'handwatches mens', 500, 10000);

SELECT * FROM Products
