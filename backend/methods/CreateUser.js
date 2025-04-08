import {PrismaClient} from '@prisma/client';
import bcrypt  from "bcryptjs";
const prisma = new PrismaClient();

// Function to create a user (Prisma operation)
async function createUser(email, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
   let dat= await prisma.user.create({
    data:{
      email:email,
      password:hashedPassword
    }
   })
   console.log(dat);
   
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}

export default createUser;