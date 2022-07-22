import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'
import IUser from '../../Interfaces/IUser'
import UserRegisterSchema from '../../Schemas/SUserRegister'
import Formulario from '../Base/Formulario'

const Register = () => {
    const navigate = useNavigate()
    const { register, login } = useContext(AuthContext)

    const initialValues = {
        name: '',
        email: '',
        password: '',
        "repeat Password": ''
    }

    const handleOnSubmit = async (values: IUser) => {
        await register(values)
        await login(values)
        navigate("/")
    }

    return (
        <div>
            <h1>Register</h1>
            <Formulario
                initialValues={initialValues}
                validationSchema={UserRegisterSchema}
                onSubmit={handleOnSubmit}
                submitText="Register" />
        </div>
    )
}

export default Register