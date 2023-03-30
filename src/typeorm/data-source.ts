import 'reflect-metadata';
import { DataSource } from 'typeorm';
require('dotenv').config();

export const CXN = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/entity/*.{js,ts}`],
  subscribers: [],
  migrations: [`${__dirname}/migration/*.{js,ts}`],
});
