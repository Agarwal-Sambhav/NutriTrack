import {createfood} from '@/prisma/product'

export default async function handler(req,res){
    try{
        switch(req.method){
            case 'POST':{
                const {name,calories} = req.body;
                const new_nut = await createfood(name,calories)
                return res.status(201).json(new_nut)
            }
        }
    }
}