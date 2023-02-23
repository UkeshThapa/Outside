CREATE TABLE
    users(
        id serial NOT NULL PRIMARY KEY,
        username VARCHAR(30) NOT NULL UNIQUE,
        password VARCHAR(20) NOT NULL,
        role VARCHAR(20) NOT NULL
    );