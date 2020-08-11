import express, { json } from 'express';
import routes from './routes';
import cors from 'cors'

const app = express();

app.use(json())
app.use(cors())
app.use(routes)

app.listen(3333, () => {
    console.log("Server's online at port 3333");
})