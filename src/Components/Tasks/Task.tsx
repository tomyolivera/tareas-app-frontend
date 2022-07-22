import { useNavigate } from "react-router-dom"
import { Button, Card, CardBody, CardHeader } from "reactstrap"
import { formatDate } from "../../Helpers/Functions"
import { ITask } from "../../Interfaces/ITask"

import styled from 'styled-components'

const TaskDescription = styled.p`
    max-height: 100px;
    overflow-y: auto;
    padding-right: 8px;

    ::-webkit-scrollbar {
        width: 7px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: rgb(53, 53, 53);
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: rgb(128, 128, 128);
    }
`

const Task = ({ id, name, description, completed, created_at, updated_at, handleDelete }: ITask) => {
    const navigate = useNavigate()

    return (
        <Card>
            <CardHeader>{ name }</CardHeader>
            <CardBody>
                <div className="mb-3">
                    <TaskDescription>{ description }</TaskDescription>
                    <cite>Created at: { formatDate(created_at) }</cite>
                </div>
                <Button color="primary" onClick={() => navigate(`/tasks/edit/${id}`)}>Edit</Button>
                <Button className="mx-3" color="danger" onClick={async () => await handleDelete(id)}>Delete</Button>
            </CardBody>
        </Card>
    )
}

export default Task