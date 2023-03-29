import 'reflect-metadata';
import { DataSource } from 'typeorm';
require('dotenv').config()

export const CXN = new DataSource({
    type:'postgres',
   host : process.env.POSTGRES_HOST,
   port:  5432,
   username: process.env.POSTGRES_USER,
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DB,
   synchronize: false,
   logging: false,
   entities:['src/typeorm/entities/**/*{.ts,.js}'],
   migrations:['src/typeorm/migrations/**/*{.ts,.JS}']
})