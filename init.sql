CREATE DATABASE IF NOT EXISTS catastrophe;
CREATE TABLE IF NOT EXISTS products (
  Product_ID VARCHAR(255) NOT NULL,
  Product_Name VARCHAR(255),
  Product_Category ENUM('Food', 'Litter', 'Furniture', 'Bowls'),
  Image_File VARCHAR(255),
  Product_Price DECIMAL(8, 2),
  Quantity INT DEFAULT 10,
  PRIMARY KEY (Product_ID)
);

INSERT INTO products (Product_ID, Product_Name, Product_Category, Image_File, Product_Price)
VALUES
(001, 'Kit Kat Complete Cuisine Tuna & Goji Berry in Broth', 'Food', '001.jpg', '90.0'),
(002, 'Cuties Catz Seafood Flavor', 'Food', '002.jpg', '51.0'),
(003, 'Cats Taste Tuna and Crab Surimi in Gravy', 'Food', '003.jpg', '59.0'),
(101, 'Vetreska Deodorant Tofu Green Tea Cat Litter', 'Litter', '101.jpg', '1690.0'),
(102, 'Petdays Coffee Cat Litter', 'Litter', '102.jpg', '225.0'),
(103, 'Signature 7 Crystal Lavender Cat Litter', 'Litter', '103.jpg', '745.0'),
(201, 'Zee.Bed Najima Pet Bed', 'Furniture', '201.jpg', '6645.0'),
(202, 'Best Friends Wheat Fur Pet Bed', 'Furniture', '202.jpg', '1895.0'),
(203, 'Ruff Barako Pet Bed', 'Furniture', '203.jpg', '4590.0'),
(301, 'Vetreska Flora Ceramic Pet Bowl', 'Bowls', '301.jpg', '1690.0'),
(302, 'Zee.Cat Terracotta Cat Bowl', 'Bowls', '302.jpg', '995.0'),
(303, 'Michiko Stainless Steel Pet Bowl', 'Bowls', '303.jpg', '150.0');
