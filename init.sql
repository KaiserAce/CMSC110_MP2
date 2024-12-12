CREATE DATABASE IF NOT EXISTS catastrophe;
CREATE TABLE IF NOT EXISTS products (
  Product_ID INT NOT NULL,
  Product_Name VARCHAR(255),
  Product_Category ENUM('Cat', 'Food', 'Toy', 'Others'),
  Image_File VARCHAR(255),
  Quantity INT DEFAULT 10,
  PRIMARY KEY (Product_ID)
);

INSERT INTO products (Product_ID, Product_Name, Product_Category, Image_File)
VALUES
(001, 'Cookies and Cream', 'Cat', '001.png'),
(002, 'Garfield', 'Cat', '002.png'),
(101, 'Dry Food', 'Food', '101.png'),
(102, 'Canned Tuna', 'Food', '102.png'),
(201, 'Mouse Toy', 'Toy', '201.png'),
(202, 'Laser Pointer', 'Toy', '202.png'),
(301, 'Cat Tree', 'Others', '301.png');
