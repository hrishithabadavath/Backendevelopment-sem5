-- PostgreSQL JSONB Experiment
-- Demonstrating SQL and NoSQL-style document storage

-- Create database
CREATE DATABASE jsonb_demo;

-- Connect to the database
\c jsonb_demo

-- Create students table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    details JSONB
);

-- Insert first student
INSERT INTO students (name, email, details)
VALUES (
    'Hrishitha',
    'hrishitha@gmail.com',
    '{
        "semester": 3,
        "skills": ["Python", "Java", "SQL"],
        "address": {
            "city": "Dehradun",
            "country": "India"
        }
    }'
);

-- Read all students
SELECT * FROM students;

-- Display JSON in readable format
SELECT jsonb_pretty(details)
FROM students;

-- Read semester
SELECT details -> 'semester'
FROM students;

-- Read semester as text
SELECT details ->> 'semester'
FROM students;

-- Read skills
SELECT details -> 'skills'
FROM students;

-- Read nested city
SELECT details -> 'address' ->> 'city'
FROM students;

-- Search JSONB using ->>
SELECT *
FROM students
WHERE details ->> 'semester' = '3';

-- Search JSONB using containment operator
SELECT *
FROM students
WHERE details @> '{"semester": 3}';

-- Update semester
UPDATE students
SET details = jsonb_set(
    details,
    '{semester}',
    '4'
)
WHERE name = 'Hrishitha';

-- Add phone field
UPDATE students
SET details = details || '{"phone": "9876543210"}'
WHERE name = 'Hrishitha';

-- Insert another student with a different JSON structure
INSERT INTO students (name, email, details)
VALUES (
    'Rahul',
    'rahul@gmail.com',
    '{
        "semester": 5,
        "skills": ["C++", "JavaScript"],
        "project": "Web Development"
    }'
);

-- Display both JSON documents
SELECT jsonb_pretty(details)
FROM students;

-- Create GIN index
CREATE INDEX students_details_index
ON students
USING GIN (details);

-- Search JSONB data
SELECT *
FROM students
WHERE details @> '{"semester": 4}';