import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const users = [
  {
    name: 'Zach Harrison',
    email: 'zharrison100@gmail.com',
    password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
    isAdmin: true,
  },
  {
    name: 'Joe Smith',
    email: 'jsmith@gmail.com',
    password: bcrypt.hashSync('password', 10),
  },
  {
    name: 'Sarah Williams',
    email: 'swilliams@gmail.com',
    password: bcrypt.hashSync('password', 10),
  },
  {
    name: 'Kanye West',
    email: 'yeezy@gmail.com',
    password: bcrypt.hashSync('password', 10),
  },
];

export default users;
