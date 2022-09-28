import { Prisma } from "@prisma/client"

const Register = (data) => {
  return await Prisma.Users.create({data: {
    name: data.name,
    password: data.password
  }})
}

export default Register