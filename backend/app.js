import express from "express"
import "dotenv/config"
import cors from "cors"
import indexRoute from "./routes/indexRoute.js"

const PORT  = process.env.PORT || 1200

const app = express()
app.use(express.json())
app.use(cors())
app.use("/",indexRoute)

app.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))