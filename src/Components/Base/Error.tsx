import { useNavigate } from "react-router-dom"
import { Button } from "reactstrap"

const Error = ({ message }: { message: string }) => {
    const navigate = useNavigate()

    return (
        <>
            <div className='alert alert-danger'>
                <h1>{ message }</h1>
            </div>
            <Button color="primary" onClick={() => navigate('/')}>Go Home</Button>
        </>
    )
}

export default Error