 
CREATE TABLE Branch
(
	ID serial,
	Name CHAR(50),
	Address CHAR(150),
	PhoneNo BIGINT,
	PRIMARY KEY (ID),
	UNIQUE (PhoneNo)
);

INSERT INTO Branch(name, address, PhoneNo) VALUES ('RiverRock', '4567 Richmond', '7786545678');
INSERT INTO Branch(name, address, PhoneNo) VALUES ('Parq', '4567 DownTown', '7786574534');


CREATE TABLE Employee
(
	ID serial,
	Name VARCHAR(50),
    Email VARCHAR(50),
    PhoneNo INT,
    Password VARCHAR(20),
    BranchID INT NOT NULL,
    FOREIGN KEY (BranchID) REFERENCES Branch(ID)
    ON DELETE NO ACTION
        ON UPDATE CASCADE,
        PRIMARY KEY (ID),
    UNIQUE (Email),
    UNIQUE (PhoneNo)

);
