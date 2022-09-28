import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const validateRegisterUser = async (req, res, next) => {
  const {user_name, password, same_password} = req.body
  const message = {}

  if (password != same_password) {
    message.same_password = 'Password comfirm wrong'
    res.status(400).json({message, status: 'validate_error'})
    return
  }

  const user = await prisma.Users.findUnique({
    where: {
      name: user_name
    }
  })

  if (user) {
    message.user_name = 'User Exists'
    res.status(400).json({message, status: 'validate_error'})
    return
  } else {
    next()
  }
}

export default validateRegisterUser