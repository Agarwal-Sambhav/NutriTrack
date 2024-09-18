import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {PrismaClient} from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




async function main(){
  const post = await prisma.post.create({
    data:{
      foodName:"burger1",
      calories:23
    }
  })
  console.log(post)
}
main();

