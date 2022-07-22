import { object, string } from 'yup'

const TaskSchema = object().shape({
    name: string().max(60).required(),
    description: string().max(255).required(),
})

export default TaskSchema