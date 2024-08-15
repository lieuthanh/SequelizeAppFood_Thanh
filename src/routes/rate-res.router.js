import express from 'express'
import { addRateRes, getRateRes, getRateUser } from '../controllers/rate-res.controller.js'

const rateResRouter = express.Router()

rateResRouter.post('/add',addRateRes)
rateResRouter.get('/restaurant/:res_id',getRateRes)
rateResRouter.get('/user/:user_id', getRateUser)

export { rateResRouter}