import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { responseData } from "../config/response.js";

const model = initModels(sequelize);

const likeRes = async(req,res)=>{
    try{
        const {user_id, res_id} = req.body;
    let data = await model.like_res.findOne({
        where:{user_id, res_id}
    });
    if(data){
        return responseData(400,"User has liked", null, res)
    }
    const like = await model.like_res.create({
        user_id,
        res_id,
        date_like: new Date() 
    })
    responseData(201,"Likes Restaurant Successful", like, res)
    }catch(err){
        responseData(500,"Error Likes Restaurant",err.message,res)
    }
    
}
const unLikeRes = async(req,res)=>{
    try{
        const {user_id, res_id} = req.body;
    let data = await model.like_res.destroy({
        where:{user_id, res_id}
    });
    if(data){
        return responseData(200,"User has unlike", null, res)
    }else{
        responseData(404,"Like Not Found", null, res)
    }
    }catch(err){
        responseData(500,"Error UnLikes Restaurant",err.message,res)
    }
    
}

const getLikeUser = async(req,res)=>{
    try{
        const {user_id} = req.params;
    let data = await model.like_res.findAll({
        where:{user_id},
        include:["re"]
    });
    responseData(200,"Likes By User", data, res)
    }catch(err){
        responseData(500,"Error Likes User",err.message,res)
    }
    
}
const getLikeRes = async(req,res)=>{
    try{
        const {res_id} = req.params;
    let data = await model.like_res.findAll({
        where:{res_id},
        include:["user"]
    });
    responseData(200,"Likes By Restaurant", data, res)
    }catch(err){
        responseData(500,"Error Likes Restaurant",err.message,res)
    }
    
}

export {
    getLikeUser,
    getLikeRes,
    likeRes,
    unLikeRes
}