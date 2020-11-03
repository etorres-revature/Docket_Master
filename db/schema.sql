-- Creating the database for Docket Master app
CREATE DATABASE docket_master_db;
CREATE USER 'docket'@'localhost' IDENTIFIED BY 'D0ck3t'
GRANT ALL PRIVILEGES  ON docket_master_db.* TO 'docket'@'localhost';
