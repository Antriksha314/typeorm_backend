/* eslint-disable no-console */
require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { CXN } from './typeorm/data-source';
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

(async function () {
  try {
    await CXN.initialize();
    console.log('Connection started');
  } catch (error) {
    console.log('Cannot start connection: ', error);
  }
})();

const files = fs.readdirSync('src/modules');
for (const file of files) {
  if (fs.existsSync(`src/modules/${file}/route.ts`)) {
    app.use('/api/', require(`./modules/${file}/route`));
  }
}
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
