import { createContext, useContext, useEffect, useState } from "react";
import { AxiosDelete, AxiosGet, AxiosPost, AxiosPut } from "../Helpers/Axios";
import { ITask } from "../Interfaces/ITask";
import AuthContext from "./AuthContext";

interface TaskContextProps {
    tasks: ITask[]
    setTasks: (tasks: ITask[]) => void
    addTask: (task: ITask) => Promise<void>
    editTask: (task: ITask) => Promise<void>
    deleteTask: (id: number) => Promise<void>
}

const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    setTasks: () => {},
    addTask: async ({}) => {},
    editTask: async ({}) => {},
    deleteTask: async ({}) => {}
})

export default TaskContext

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useContext(AuthContext)
    const [tasks, setTasks] = useState<ITask[]>([])

    useEffect(() => {
        (async () => {
            if(user === null) return
            await getTasks()
        })()
    }, [user])
    
    const getTasks = async () => setTasks(await AxiosGet("/tasks/", true))

    const addTask = async (task: ITask) => {
        await AxiosPost("/tasks/", task, true)
        await getTasks()
    }

    const editTask = async (task: ITask) => {
        await AxiosPut(`/tasks/${task.id}`, task, true)
        await getTasks()
    }

    const deleteTask = async (id: number) => {
        await AxiosDelete(`/tasks/${id}`, true)
        await getTasks()
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks, addTask, editTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}