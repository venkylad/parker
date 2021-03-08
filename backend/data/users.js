const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    isProvider: true,
    phone: 7731012637,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    phone: 7731012637,
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
    phone: 7731012637,
  },
];

module.exports = users;
