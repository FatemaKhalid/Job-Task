ALTER USER postgres PASSWORD 'pass';
DROP DATABASE IF EXISTS royalmanta;
CREATE DATABASE royalmanta;
\c royalmanta
CREATE TABLE login_user(
   id serial PRIMARY KEY,
   email VARCHAR (355) UNIQUE NOT NULL,
   password_digest VARCHAR (200) NOT NULL
);
