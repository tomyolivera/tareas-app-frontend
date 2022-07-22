import { object, string, ref } from 'yup'

const UserRegisterSchema = object().shape({
    name: string().max(60).required(),
    email: string().email().required(),
    password: string().min(8).required(),
    "repeat Password": string().oneOf([ref('password')], "Passwords don't match").required("Repeat password"),
})

export default UserRegisterSchema