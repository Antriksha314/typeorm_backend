require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { CXN } from 'typeorm/data-source';
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

(async () => {
    CXN.initialize().then(() => {
        console.log("Database connected")
    }).catch((error) => console.error(error?.message))
});
let files = fs.readdirSync('src/modules');
for (let file of files) {
    if (fs.exitsSync(`src/modules/${file}/route.ts`)) {
        app.use('/api/', require(`./modules/${file}/route`))
    }
}
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
