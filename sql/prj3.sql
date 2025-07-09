CREATE DATABASE prj3;
USE prj3;
CREATE TABLE board
(
    id      INT AUTO_INCREMENT NOT NULL,
    title   VARCHAR(15)    NOT NULL,
    content VARCHAR(10000) NOT NULL,
    author  VARCHAR(8) NULL,
    inserted_at datetime NOT NULL DEFAULT NOW(),
    CONSTRAINT pk_board PRIMARY KEY (id)
);