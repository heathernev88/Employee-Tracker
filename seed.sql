DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)

);

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
	CONSTRAINT employee_fk_1 FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO department (name) values ("Development");
INSERT INTO department (name) values ("Production");
INSERT INTO department (name) values ("Customer Service");

INSERT INTO employee (first_name, last_name) values ("Heather", "Nevarez");
INSERT INTO employee (first_name, last_name) values ("Cuzco", "Nevarez");
INSERT INTO employee (first_name, last_name) values ("Tiberius", "Nevarez");
INSERT INTO employee (first_name, last_name) values ("Michael", "Scott");
INSERT INTO employee (first_name, last_name) values ("Dwight", "Schrute");
INSERT INTO employee (first_name, last_name) values ("Andy", "Bernard");


INSERT INTO role (title, salary, department_id) values ("CEO", "500000", 1);
INSERT INTO role (title, salary, department_id) values ("Manager", "100000", 2);
INSERT INTO role (title, salary, department_id) values ("Web Developer", "100000", 3);
INSERT INTO role (title, salary, department_id) values ("Regional Manager", "40000", 1);
INSERT INTO role (title, salary, department_id) values ("Assistant", "20000", 2);
INSERT INTO role (title, salary, department_id) values ("Entertainer", "10000", 3);


SELECT * FROM role

