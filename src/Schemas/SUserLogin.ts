import { object, string } from 'yup'

const UserLoginSchema = object().shape({
    email: string().email().required(),
    password: string().required(),
})

export default UserLoginSchema