import express from 'express'
import { getLikeRes, getLikeUser, likeRes, unLikeRes } from '../controllers/like-res.controller.js'

const likeResRouter = express.Router()

likeResRouter.post('/like',likeRes)
likeResRouter.post('/unlike',unLikeRes)
likeResRouter.get('/user/:user_id',getLikeUser)
likeResRouter.get('/restaurant/:res_id',getLikeRes)

export {likeResRouter}
