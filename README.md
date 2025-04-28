my sql queries 

CREATE DATABASE event_planner;

USE event_planner;

CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date DATE NOT NULL
);

INSERT INTO events (title, description, date)
VALUES ('Sample Event', 'This is a sample event description', '2025-05-01');

select * from events;


ng serve for frontend 
node server.js for backend
do forgot to change password of your mysql in server.js file

Good Luck !!
