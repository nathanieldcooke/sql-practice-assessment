CREATE TABLE countries (
    id SERIAL,
    name VARCHAR(100) NOT NULL,
    continent_name VARCHAR(20) NOT NULL,

    PRIMARY KEY (id)
);