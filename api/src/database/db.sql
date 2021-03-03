--to create a new database
CREATE DATABASE challengefs;

--to use database
use challengefs;

--creating a new table
CREATE TABLE product (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(100) NOT NULL,
  price VARCHAR(15),
  type VARCHAR(50) NOT NULL
);

--to show all tables
show tables;

--to describe table
describe product;


