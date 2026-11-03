import express from "express"
import { dummy} from "../controller/indexController.js"
const router =  express.Router()

router.get("/",dummy)

export default router