import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "reactstrap"
import TaskContext from "../../Context/TaskContext"
import { ITask } from "../../Interfaces/ITask"
import Task from "./Task"

const Tasks = () => {
    const navigate = useNavigate()
    const { tasks, deleteTask } = useContext(TaskContext) 

    const handleDelete = async (id: number) => {
        await deleteTask(id)
    }

    return (
        <>
            <Button className="mb-3" color="success" onClick={() => navigate("/tasks/add")}>Add task</Button>

            {
                tasks.map(({ id, name, description, completed, created_at, updated_at }: ITask, i) => (
                        <div key={i} className="mb-3">
                            <Task   id={id}
                                    name={name}
                                    description={description}
                                    completed={completed}
                                    created_at={created_at}
                                    updated_at={updated_at}
                                    handleDelete={handleDelete}
                                />
                        </div>
                    )
                )
            }
        </>
    )
}

export default Tasks