import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Auth/Login'
import Logout from './Components/Auth/Logout'
import Register from './Components/Auth/Register'
import Error from './Components/Base/Error'
import Header from './Components/Base/Header'
import TaskForm from './Components/Tasks/TaskForm'
import Tasks from './Components/Tasks/Tasks'
import AuthContext from './Context/AuthContext'

const AppRouter = () => {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <Header/>

            <div className='my-4'>
                <Routes>
                    <Route path='/' element={<h1>Home</h1>} />

                    {
                        isAuthenticated
                        ? <>
                            <Route path='/tasks' element={<Tasks />} />
                            <Route path='/tasks/add' element={<TaskForm />} />
                            <Route path='/tasks/edit/:id' element={<TaskForm />} />

                            <Route path="/logout" element={<Logout />} />
                        </>
                        : <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </>
                    }

                    <Route path="*" element={<Error message="404 Not Found" />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter