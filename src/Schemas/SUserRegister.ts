import { object, string, ref } from 'yup'

const UserRegisterSchema = object().shape({
    name: string().required("Name is missing"),
    email: string().email("Not a valid email").required("Email is missing"),
    password: string().required("Password is missing"),
    "repeat Password": string().oneOf([ref('password')], "Passwords don't match").required("Repeat password"),
})

export default UserRegisterSchema