import { useContext } from "react"
import { Link } from "react-router-dom"
import { Nav, Navbar, NavItem } from "reactstrap"
import AuthContext from "../../Context/AuthContext"

const Header = () => {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <Navbar color="dark" className="py-4 px-2">
            <Link to="/" className="text-light text-decoration-none">Tasks App</Link>
            <Nav>
                {
                    isAuthenticated
                     ? <>
                            <NavItem>
                                <Link to="/tasks" className="text-light text-decoration-none">My Tasks</Link>
                            </NavItem>
                            <NavItem className="mx-3">
                                <Link to="/logout" className="text-light text-decoration-none">Logout</Link>
                            </NavItem>
                    </>
                    : <>
                        <NavItem className="mx-3">
                            <Link to="/login" className="text-light text-decoration-none">Login</Link>
                        </NavItem>
                        <NavItem className="mx-3">
                            <Link to="/register" className="text-light text-decoration-none">Register</Link>
                        </NavItem>
                    </>
                }
            </Nav>
        </Navbar>
    )
}

export default Header