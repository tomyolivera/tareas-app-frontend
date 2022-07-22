import { createContext, useEffect, useState } from "react";
import { AxiosGet, AxiosPost } from "../Helpers/Axios";
import IUser from "../Interfaces/IUser";

interface AuthContextProps {
    isAuthenticated: boolean
    user: IUser | null
    register: ({ name, email, password }: IUser) => Promise<void>
    login: ({ email, password }: IUser) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    user: null,
    register: async ({}) => {},
    login: async ({}) => {},
    logout: async () => {},
})

export default AuthContext

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    const getToken = () => localStorage.getItem("token")
    const setToken = (token: string) => localStorage.setItem("token", token)
    const clearToken = () => localStorage.setItem("token", "")
    const setUserData = async () => setUser(await AxiosGet("/users/data/me", true))

    useEffect(() => {
        (async () => {
            const token = getToken()
            if (token) {
                const user = await AxiosGet("/users/data/me", true)
                if(user.id){
                    setIsAuthenticated(true)
                    setUser(user)
                }
            }
        })()
    }, [isAuthenticated])

    const register = async ({ name, email, password }: IUser) => await AxiosPost("/auth/register", { name, email, password })

    const login = async ({email, password}: IUser) => {
        const token = await AxiosPost("/auth/login", {email, password})
        setToken(token)
        setIsAuthenticated(true)
        await setUserData()
    }

    const logout = async () => {
        await AxiosGet("/auth/logout", true)
        setIsAuthenticated(false)
        clearToken()
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
