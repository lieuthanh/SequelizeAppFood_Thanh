import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { responseData } from "../config/response.js";

const model = initModels(sequelize);

const addRateRes = async(req,res)=>{
    try{
        const {user_id,res_id,amount} = req.body;
    let data = await model.rate_res.create({
        user_id,
        res_id,
        amount,
        date_rate:new Date()
    });
    responseData(201,"Rates Add Succesfull", data, res)
    }catch(err){
        responseData(500,"Error Rates Add",err.message,res)
    }
    
}

const getRateUser = async(req,res)=>{
    try{
        const {user_id} = req.params;
    let data = await model.like_res.findAll({
        where:{user_id},
        include:["re"]
    });
    responseData(200,"Rates By User", data, res)
    }catch(err){
        responseData(500,"Error Rates User",err.message,res)
    }
    
}
const getRateRes = async(req,res)=>{
    try{
        const {res_id} = req.params;
    let data = await model.rate_res.findAll({
        where:{res_id},
        include:["user"]
    });
    responseData(200,"Rates By Restaurant", data, res)
    }catch(err){
        responseData(500,"Error Rates Restaurant",err.message,res)
    }
    
}

export {
    getRateUser,
    getRateRes,
    addRateRes
}