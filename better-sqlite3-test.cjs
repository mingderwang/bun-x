const options = {};
const db = require('better-sqlite3')('./foobar.db', options);

// Connect to a database (or create it if it doesn't exist)

// Create a table
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT
  )`;

db.exec(createTableQuery);

// Insert a user into the 'users' table
const insertUserQuery = `
  INSERT INTO users (name) VALUES ('John Doe')`;

db.exec(insertUserQuery);

// Query all users
const queryUsers = 'SELECT * FROM users';
const users = db.prepare(queryUsers).all();

// Print the users
console.log('Users:');
users.forEach((user) => {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
});

// Close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Database closed.');
});
