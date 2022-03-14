CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE usuarios (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username varchar(20) UNIQUE NOT NULL,
    email varchar(30) UNIQUE NOT NULL,
    password varchar(15) NOT NULL,
    date DATE NOT NULL
);

INSERT INTO usuarios (username, email, password, date) VALUES ('Joaquin', 'joaquin@gmail.com', '123456', '2022-03-09');
INSERT INTO usuarios (username, email, password, date) VALUES ('Barbara', 'barbara@gmail.com', '2478756', '2022-03-12');
