CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    age SMALLINT,
    "name" TEXT,
    email TEXT,
    job TEXT
);


INSERT INTO users (age, "name", email, job) VALUES (
    20,
    'Paul',
    'pmcslarrow@icloud.com',
    'unemployed'
)