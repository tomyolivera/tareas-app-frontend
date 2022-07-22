import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'
import IUser from '../../Interfaces/IUser'
import UserLoginSchema from '../../Schemas/SUserLogin'
import Formulario from '../Base/Formulario'

const Login = () => {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)

    const initialValues = {
        email: '',
        password: ''
    }

    const handleOnSubmit = async (values: IUser) => {
        await login(values)
        navigate("/")
    }

    return (
        <div>
            <h1>Login</h1>
            <Formulario
                initialValues={initialValues}
                validationSchema={UserLoginSchema}
                onSubmit={handleOnSubmit}
                submitText="Login" />
        </div>
    )
}

export default Login