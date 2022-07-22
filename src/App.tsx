import { useContext } from "react"
import AuthContext, { AuthProvider } from "./Context/AuthContext"
import AppRouter from "./AppRouter"
import { Container } from "reactstrap"
import { TaskProvider } from "./Context/TaskContext"

const App = () => {
    // const {  } = useContext(AuthContext)

    return (
        <AuthProvider>
            <TaskProvider>
                <Container>
                    <AppRouter />
                </Container>
            </TaskProvider>
        </AuthProvider>
    )
}

export default App