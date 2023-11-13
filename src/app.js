import express from 'express'
import {router} from './routes/index.js'
const app = express()

app.use(express.json())
app.use(router)


app.get('/',(req,res)=>{
    res.status(200).send("Connected on port 3000")
})

export default app;
