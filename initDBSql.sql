
-- This Sql Script creats all tables and adds dummy data
-- This Script is not used anywhere. 
-- This is however required for grading and also acts as a backup if something happens to our remote db

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
		ON DELETE CASCADE
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



CREATE TABLE Game
(
	ID serial,
	game_date DATE,
	StartTime TIME,
	EndTime TIME,
	NoOfPlayers INT,
	RakeAmount FLOAT,
	BranchID INT,
	table_no INT,
	EmployeeID INT,
	Tip FLOAT,
	FOREIGN KEY (BranchID) REFERENCES Branch(ID)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
	FOREIGN KEY (BranchID, table_no) REFERENCES PokerTable(BranchID, table_no)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
	FOREIGN KEY (EmployeeID) REFERENCES Employee(ID)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
	PRIMARY KEY (ID)
);

INSERT INTO Game(game_date,
	StartTime,
    EndTime,
	NoOfPlayers,
    RakeAmount,
	BranchID,
	table_no,
	EmployeeID,
	Tip) VALUES ('2020-04-04', '12:30:00','12:30:00', 100,  3, 1, 1, 1, 50);

INSERT INTO Game(game_date,
	StartTime,
    EndTime,
	NoOfPlayers,
    RakeAmount,
	BranchID,
	table_no,
	EmployeeID,
	Tip) VALUES ('2020-04-04', '12:30:00','12:30:00', 3, 100, 1, 2, 1, 100);

INSERT INTO Game(game_date,
	StartTime,
    EndTime,
	NoOfPlayers,
    RakeAmount,
	BranchID,
	table_no,
	EmployeeID,
	Tip) VALUES ('2020-04-05', '11:30:00','15:30:00', 4, 300, 1, 1, 2, 200);

INSERT INTO Game(game_date,
	StartTime,
    EndTime,
	NoOfPlayers,
    RakeAmount,
	BranchID,
	table_no,
	EmployeeID,
	Tip) VALUES ('2020-04-05', '11:30:00','15:30:00', 4, 400, 1, 1, 2, 200);

INSERT INTO Game(game_date,
	StartTime,
    EndTime,
	NoOfPlayers,
	BranchID,
	table_no,
	EmployeeID,
	Tip) VALUES ('2020-04-05', '15:30:00','18:30:00', 3, 1, 1, 2, 300);

CREATE TABLE Players
(
	ID serial,
	Name VARCHAR(50), 
	Email VARCHAR(50),
	Password VARCHAR(20),
	CurrentChipStack FLOAT,
	CurrentGameID INT,
	FOREIGN KEY (CurrentGameID) REFERENCES Game(ID)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
	PRIMARY KEY (ID),
	UNIQUE (Email)
);

INSERT INTO Players(Name, Email, Password, CurrentChipStack) VALUES ('Fawaz', 'fawaz@gmail.com', 'fawaz123', 0.0);
INSERT INTO Players(Name, Email, Password, CurrentChipStack) VALUES ('Daniel', 'daniel@gmail.com', 'daniel123', 0.0);
INSERT INTO Players(Name, Email, Password, CurrentChipStack) VALUES ('Joel', 'joel@gmail.com', 'joel123', 0.0);
INSERT INTO Players(Name, Email, Password, CurrentChipStack) VALUES ('Dimi', 'dimi@gmail.com', 'dimi123', 0.0);
INSERT INTO Players(Name, Email, Password, CurrentChipStack) VALUES ('Phil', 'phil@gmail.com', 'phil123', 0.0);
INSERT INTO Players(Name, Email, Password, CurrentChipStack) VALUES ('Magnus', 'magnus@gmail.com', 'magnus123', 0.0);




CREATE TABLE CashIn
(
	ID serial,
	Amount float,
	cash_in_time TIME,
    cash_in_date DATE,
	PlayerID INT,
	EmployeeID INT,
	FOREIGN KEY (PlayerID) REFERENCES Players(ID)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
	FOREIGN KEY (EmployeeID) REFERENCES Employee(ID)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
	PRIMARY KEY (ID)
);


CREATE TABLE CashOut
(
	ID serial,
	Amount float,
	cash_out_time TIME,
    cash_out_date DATE,
	Discount INT,
	PlayerID INT,
	EmployeeID INT,
	FOREIGN KEY (PlayerID) REFERENCES Players(ID)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
	FOREIGN KEY (EmployeeID) REFERENCES Employee(ID)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
	PRIMARY KEY (ID)
);


INSERT INTO CashIn(Amount,
	cash_in_time,
    cash_in_date,
	PlayerID,
	EmployeeID) VALUES (400, '12:30:00', '2020-04-04', 1, 2);
INSERT INTO CashOut(Amount,
	cash_out_time,
    cash_out_date,
	PlayerID,
	EmployeeID) VALUES (600, '4:30:00', '2020-04-04', 1, 1);

INSERT INTO CashIn(Amount,
	cash_in_time,
    cash_in_date,
	PlayerID,
	EmployeeID) VALUES (200, '5:30:00', '2020-04-04', 1, 2);
INSERT INTO CashOut(Amount,
	cash_out_time,
    cash_out_date,
	PlayerID,
	EmployeeID) VALUES (200, '08:30:00', '2020-04-04', 1, 2);

INSERT INTO CashIn(Amount,
	cash_in_time,
    cash_in_date,
	PlayerID,
	EmployeeID) VALUES (500, '6:30:00', '2020-04-04', 2, 2);

INSERT INTO CashOut(Amount,
	cash_out_time,
    cash_out_date,
	PlayerID,
	EmployeeID) VALUES (900, '09:30:00', '2020-04-04', 2, 2);

    INSERT INTO CashIn(Amount,
	cash_in_time,
    cash_in_date,
	PlayerID,
	EmployeeID) VALUES (200, '1:30:00', '2020-05-04', 2, 2);
INSERT INTO CashOut(Amount,
	cash_out_time,
    cash_out_date,
	PlayerID,
	EmployeeID) VALUES (700, '5:30:00', '2020-05-04', 2, 1);


CREATE TABLE GamePlay
(
	GameID INT,
	PlayerID INT,
	StartingStack FLOAT,
	EndingStack FLOAT,
	FOREIGN KEY (GameID) REFERENCES Game(ID)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	FOREIGN KEY (PlayerID) REFERENCES Players(ID)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	PRIMARY KEY (GameID, PlayerID)
);
   
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (1, 1, 400, 600);
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (1, 2, 200, 100);
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (1, 3, 300, 300);
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (2, 1, 500, 600);
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (2, 4, 200, 100);
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (2, 5, 300, 300);    
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (3, 1, 500, 700);
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (3, 3, 200, 100);
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (3, 2, 300, 300);
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (4, 1, 600, 700);
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (4, 6, 200, 100);
INSERT INTO GamePlay(GameID,
	PlayerID,
	StartingStack,
	EndingStack ) VALUES (4, 5, 300, 300);