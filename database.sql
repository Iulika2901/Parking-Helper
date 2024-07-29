-- Listing all databases
\l

-- Creating and dropping a database
CREATE DATABASE test;
DROP DATABASE test;

-- Connecting to a database
\c database_name

-- Basic Table Creation
CREATE TABLE example_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    created_at DATE
);

-- Data Types
bigint, Boolean, varchar, float, date, money, text

-- Creating car table
CREATE TABLE car (
    car_uid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    price NUMERIC(19, 2) NOT NULL
);

-- Creating person table
CREATE TABLE person (
    person_uid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    parking_discount INTEGER,
    car VARCHAR(50) NOT NULL,
    car_type VARCHAR(50),
    car_year NUMERIC,
    gender VARCHAR(7) NOT NULL,
    age INTEGER NOT NULL,
    date_of_birth DATE NOT NULL,
    car_id UUID REFERENCES car(car_uid),
    email VARCHAR(150)
);

-- Creating parking_places table
CREATE TABLE parking_places (
    parking_uid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL,
    street VARCHAR(50) NOT NULL,
    bicycle_places INTEGER,
    big_car_places INTEGER,
    small_car_places INTEGER,
    disabilities_places INTEGER,
    price NUMERIC
);


-- Inserting data into person table
INSERT INTO person (first_name, last_name, gender, date_of_birth)
VALUES ('Popescu', 'Jonha', 'female', '1998-01-01');

INSERT INTO person (first_name, last_name, gender, date_of_birth, email)
VALUES ('Yump', 'Jon', 'MALE', '1988-11-01', 'nakj@gmail.com');

-- Basic SELECT queries
SELECT * FROM person;
SELECT emails, password FROM person ORDER BY emails ASC;
SELECT DISTINCT first_name FROM person ORDER BY first_name DESC;
SELECT * FROM person WHERE (gender = 'female' AND age > 50) OR (gender = 'female' AND age < 18);
SELECT first_name, last_name, gender, age(NOW(), date_of_birth) AS age FROM person;

-- Date and time functions
SELECT CURRENT_DATE;
SELECT NOW();
SELECT NOW()::DATE;
SELECT NOW()::TIME;
SELECT NOW() - INTERVAL '10 years';
SELECT NOW()::DATE + INTERVAL '10 years';
SELECT EXTRACT(YEAR FROM NOW());

-- Updating data
UPDATE person SET parking_discount = 50 WHERE date_of_birth = CURRENT_DATE;
UPDATE person SET car_type = 'SUV' WHERE car LIKE '% Toyota %';

-- Deleting data
DELETE FROM person WHERE id = 1;

-- Handling constraints
ALTER TABLE person DROP CONSTRAINT id;
ALTER TABLE person ADD PRIMARY KEY (id);
ALTER TABLE person ADD CONSTRAINT unique_email UNIQUE(email);
ALTER TABLE person DROP CONSTRAINT unique_email;
ALTER TABLE person ADD CONSTRAINT gender_constraint CHECK (gender = 'male' OR gender = 'female');
DELETE FROM person WHERE gender = 'hello';

-- Inner join
SELECT person.first_name, car.make, car.model, car.price
FROM person
JOIN car ON person.car_id = car.car_uid;

-- Left join
SELECT * FROM person
LEFT JOIN car ON car.car_uid = person.car_id;

-- Grouping and aggregations
SELECT year_car, COUNT(*) FROM person GROUP BY car_type ORDER BY car_type;
SELECT year_car, COUNT(*) FROM person GROUP BY car_type HAVING COUNT(*) > 5 AND year > 2000 ORDER BY car_type;
SELECT MAX(price) FROM car;
SELECT ROUND(AVG(price)) FROM car;
SELECT car_type FROM person GROUP BY car_type;
SELECT SUM(price) FROM car;
SELECT make, SUM(price) FROM car GROUP BY make;

-- Export result to CSV
\copy (SELECT * FROM person LEFT JOIN car ON car.car_uid = person.car_id) TO '/Users/Bacriu/Desktop/results.csv' DELIMITER ',' CSV HEADER

-- Export result to CSV
\copy (SELECT * FROM person LEFT JOIN car ON car.car_uid = person.car_id) TO '/Users/Bacriu/Desktop/results.csv' DELIMITER ',' CSV HEADER


-- Managing sequences
SELECT nextval('person_id_seq'::regclass);
ALTER SEQUENCE person_id_seq RESTART WITH 10;
SELECT nextval('person_id_seq'::regclass);

-- List available extensions
SELECT * FROM pg_available_extensions;

-- UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Generating a UUID
SELECT uuid_generate_v4();

-- PLV8 extension for JavaScript functions
CREATE EXTENSION IF NOT EXISTS plv8;

-- JavaScript functions using PLV8
CREATE FUNCTION add_numbers(a INTEGER, b INTEGER) RETURNS INTEGER AS $$
    return a + b;
$$ LANGUAGE plv8;

CREATE FUNCTION extract_field(json_data JSONB, field_name TEXT) RETURNS TEXT AS $$
    return json_data[field_name];
$$ LANGUAGE plv8;

CREATE FUNCTION factorial(n INTEGER) RETURNS INTEGER AS $$
    if (n <= 1) return 1;
    return n * plv8.execute('SELECT factorial($1)', [n - 1])[0].factorial;
$$ LANGUAGE plv8;

CREATE FUNCTION array_sum(arr INTEGER[]) RETURNS INTEGER AS $$
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
$$ LANGUAGE plv8;

-- Using PLV8 functions
SELECT add_numbers(10, 20);
SELECT extract_field('{"name": "Alice", "age": 30}'::jsonb, 'name');
SELECT factorial(5);
SELECT array_sum(ARRAY[1, 2, 3, 4, 5));
