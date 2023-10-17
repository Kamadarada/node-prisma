import dotenv from 'dotenv/config.js'
import app from "./src/app.js"
const app_port = process.env.PORT


app.listen(app_port, ()=> {
    console.log(`Running on port ${app_port}`)
})







