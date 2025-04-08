import {PrismaClient} from '@prisma/client';
import bcrypt  from "bcryptjs";
const prisma = new PrismaClient();

// Function to create a user (Prisma operation)
async function findUser(email) {
  try {
   let dat= await prisma.user.findUnique({
    where:{
      email:email,
    }
   })
  return dat;
   
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}

export default findUser;