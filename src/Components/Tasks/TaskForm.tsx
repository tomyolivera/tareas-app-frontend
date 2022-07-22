import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import TaskContext from "../../Context/TaskContext"
import { ITask } from "../../Interfaces/ITask"
import TaskSchema from "../../Schemas/STask"
import Formulario from "../Base/Formulario"

const TaskForm = () => {
    const navigate = useNavigate()
    const { tasks, addTask, editTask } = useContext(TaskContext)
    const { id } = useParams()
    const [initialValues, setInitialValues] = useState({name: "", description: ""})

    useEffect(() => {
        if(id){
            const task = tasks.find(task => task.id === Number(id))
            task ? setInitialValues({name: task.name, description: task.description}) : navigate("/tasks")
        }
    }, [tasks])

    const handleOnSubmit = async (values: ITask) => {
        if(id){
            values.id = Number(id)
            if(initialValues.description !== values.description || initialValues.name !== values.name) await editTask(values)
        }else await addTask(values)
        
        navigate("/tasks")
    }

    return (
        tasks ? 
        <div>
            <Button className="align-self-center" onClick={() => (navigate("/tasks"))}>Volver</Button>
            <h1 className="my-3">Task Form</h1>
            <Formulario
                initialValues={initialValues}
                onSubmit={handleOnSubmit}
                validationSchema={TaskSchema}
                submitText={id ? "Edit Task" : "Add Task"}
                editing={id ? true : false}
            />
        </div> : <></>
    )
}

export default TaskForm