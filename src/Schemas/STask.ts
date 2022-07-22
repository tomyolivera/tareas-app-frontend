import { object, string } from 'yup'

const TaskSchema = object().shape({
    name: string().required("Name is missing"),
    description: string().required("Description is missing"),
})

export default TaskSchema