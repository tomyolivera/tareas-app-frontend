import { object, string } from 'yup'

const UserLoginSchema = object().shape({
    email: string().email().required("Email is missing"),
    password: string().required("Password is missing"),
})

export default UserLoginSchema