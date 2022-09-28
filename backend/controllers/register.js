import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const register = async (req, res) => {
  const user = await prisma.users.create({
    data: {
      name: req.body.user_name,
      password: req.body.password
    }
  })
  
  res.json(user)
}

export default register