import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { responseData } from "../config/response.js";

const model = initModels(sequelize);

const createOrder = async(req,res)=>{
    try{
        const {user_id,food_id,amount, code, arr_sub_id} = req.body;
    let data = await model.order.create({
        user_id,
        food_id,
        amount,
        code,
        arr_sub_id
    });
    responseData(201,"Order Create Succesfull", data, res)
    }catch(err){
        responseData(500,"Error Order Create",err.message,res)
    }
    
}

export {createOrder}