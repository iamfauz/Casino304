
-- This Sql Script creats all tables and adds dummy data
-- This Script is not used anywhere. 
-- This is however required for grading. 

CREATE TABLE Branch
(
	ID serial,
	Name CHAR(50),
	Address CHAR(150),
	PhoneNo BIGINT,
	PRIMARY KEY (ID),
	UNIQUE (PhoneNo)
);

-- Our casino has 2 branches
INSERT INTO Branch(name, address, PhoneNo) VALUES ('RiverRock', '4567 Richmond', '7786545678');
INSERT INTO Branch(name, address, PhoneNo) VALUES ('Parq', '4567 DownTown', '7786574534');


CREATE TABLE Employee
(
	ID serial,
	Name VARCHAR(50),
    Email VARCHAR(50),
    PhoneNo BIGINT,
    Password VARCHAR(20),
    BranchID INT NOT NULL,
    FOREIGN KEY (BranchID) REFERENCES Branch(ID)
    ON DELETE NO ACTION
        ON UPDATE CASCADE,
        PRIMARY KEY (ID),
    UNIQUE (Email),
    UNIQUE (PhoneNo)

);

INSERT INTO Employee(name, email, PhoneNo, password, BranchID) VALUES ('Rob', 'rob@gmail.com', '7786574534', 'rob123', '1');
INSERT INTO Employee(name, email, PhoneNo, password, BranchID) VALUES ('Garry', 'garry@gmail.com', '7786545534', 'garry123', '1');
INSERT INTO Employee(name, email, PhoneNo, password, BranchID) VALUES ('David', 'david@gmail.com', '7785474534', 'david123', '2');
INSERT INTO Employee(name, email, PhoneNo, password, BranchID) VALUES ('Ricky', 'ricky@gmail.com', '7786564534', 'ricky123', '2');



CREATE TABLE PokerTableType
(
	table_type VARCHAR(20),
	rake_percent Float,
	min_buy_in INT,
	PRIMARY KEY (table_type)
);

INSERT INTO PokerTableType(table_type, rake_percent, min_buy_in) VALUES ('Low Stakes', 1,0, 100);
INSERT INTO PokerTableType(table_type, rake_percent, min_buy_in) VALUES ('High Stakes', 2,0, 400);


CREATE TABLE PokerTable
(
	table_no INT,
	table_type VARCHAR(20),
	BranchID INT NOT NULL,
	FOREIGN KEY (BranchID) REFERENCES Branch(ID)
		ON DELETE NO ACTION
		ON UPDATE CASCADE,
	FOREIGN KEY (table_type) REFERENCES PokerTableType(table_type)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
	PRIMARY KEY (BranchID, table_no)
);

-- Each Branch has 2 poker table with table_no 1 and 2
INSERT INTO PokerTable(table_no, table_type, BranchID) VALUES (1, 'Low Stakes', 1);
INSERT INTO PokerTable(table_no, table_type, BranchID) VALUES (2, 'High Stakes', 1);
INSERT INTO PokerTable(table_no, table_type, BranchID) VALUES (1, 'Low Stakes', 2);
INSERT INTO PokerTable(table_no, table_type, BranchID) VALUES (2, 'High Stakes', 2);