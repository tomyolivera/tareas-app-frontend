import { useNavigate } from "react-router-dom"
import { Button, Card, CardBody, CardHeader } from "reactstrap"
import { formatDate } from "../../Helpers/Functions"
import { ITask } from "../../Interfaces/ITask"

const Task = ({ id, name, description, completed, created_at, updated_at, handleDelete }: ITask) => {
    const navigate = useNavigate()

    return (
        <Card>
            <CardHeader>{ name }</CardHeader>
            <CardBody>
                <div className="mb-3">
                    <p>{ description }</p>
                    <cite>Created at: { formatDate(created_at) }</cite>
                </div>
                <Button color="primary" onClick={() => navigate(`/tasks/edit/${id}`)}>Edit</Button>
                <Button className="mx-3" color="danger" onClick={async () => await handleDelete(id)}>Delete</Button>
            </CardBody>
        </Card>
    )
}

export default Task