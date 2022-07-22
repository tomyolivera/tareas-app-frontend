import { Formik, Form, Field } from "formik"
import { Button } from "reactstrap"
import { AnySchema } from "yup"
import { primeraLetraMayuscula } from "../../Helpers/Functions"
import { TColor } from "../../Types/TColor"

type Props = {
    initialValues: Object,
    editing?: boolean,
    onSubmit: (values: any) => Promise<void>,
    validationSchema: AnySchema,
    submitText: string,
    submitColor?: TColor
}

const Formulario = ({ initialValues, validationSchema, editing, onSubmit, submitText, submitColor="primary" }: Props) => {
    if(editing && Object.values(initialValues)[0] === "") return (<>Loading</>)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ errors }: any) => (
                <Form>
                    <>
                        {
                            Object.keys(initialValues).map(key => (
                                <div className="form-group mb-3" key={key}>
                                    <label htmlFor={key}>{primeraLetraMayuscula(key)}</label>
                                    <Field  type={key.toLowerCase().includes("password") ? "password" : "text"}
                                            name={key}
                                            className="form-control"
                                            autoComplete="off" />
                                    {
                                        errors[key] && <small className="text-danger">{primeraLetraMayuscula(errors[key])}</small>
                                    }
                                </div>
                            ))
                        }

            
                        <div className="form-group">
                            <Button type="submit" color={submitColor}>{submitText}</Button>
                        </div>
                    </>
                </Form>
            )}
        </Formik>
    )
}

export default Formulario