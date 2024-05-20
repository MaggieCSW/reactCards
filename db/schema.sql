DROP DATABASE IF EXISTS reactCards;
CREATE DATABASE reactCards;
USE reactCards;

CREATE TABLE movie (
    movie_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    dir_fName VARCHAR(30),
    dir_lName VARCHAR(30),
    genre VARCHAR(30),
    rated ENUM('G', 'PG-13', 'TV-14', 'R', 'NR'),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_movie_id PRIMARY KEY (movie_id),
    yr_released YEAR NOT NULL
);