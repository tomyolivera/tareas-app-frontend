import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'

const Logout = () => {
    const navigate = useNavigate()
    const { logout } = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            await logout()
            navigate("/login")
        })()
    }, [])

    return (
        <></>
    )
}

export default Logout