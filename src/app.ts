import express from 'express'
import dotenv from  "dotenv"
import {json,urlencoded} from "body-parser"
import { userRoutes } from "./routes/user.route";
import {pool} from './database'

dotenv.config();
const app = express();

pool.connect().then(() => {
    console.log('Database connect !!!')
  })
  .catch(e => {
    console.error('Database dont connect', e.message, e.stack)
  })

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})