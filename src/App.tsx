import { AuthProvider } from "./Context/AuthContext"
import AppRouter from "./AppRouter"
import { Container } from "reactstrap"
import { TaskProvider } from "./Context/TaskContext"

const App = () => {
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