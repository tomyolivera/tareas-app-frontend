import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Col, Row } from "reactstrap"
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

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    tasks.map(({ id, name, description, completed, created_at, updated_at }: ITask, i) => (
                            <Col xs="12" md="6" lg="3" key={i} className="mb-3">
                                <Task   id={id}
                                        name={name}
                                        description={description}
                                        completed={completed}
                                        created_at={created_at}
                                        updated_at={updated_at}
                                        handleDelete={handleDelete}
                                    />
                            </Col>
                        )
                    )
                }
            </div>
        </>
    )
}

export default Tasks