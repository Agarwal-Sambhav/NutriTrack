import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {PrismaClient} from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAllTasks = async () => {
  return prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};