import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const createfood = async(name,calories)=>{
    const food = await prisma.product.create({
        data:{
            name,
            calories
        }
    });
    return food
}