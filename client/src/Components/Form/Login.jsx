import { Formik } from 'formik'
import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Form_Components/Button'
import Error from './Form_Components/Error'
import Input from './Form_Components/Input'
import Title from './Form_Components/Title'
import { login } from './useHttp'
import { loginValidationScheme } from './Yup/ValidationSchemes'
import { NotificationContext } from '../../Hooks/Alert/NotificationProvider'
import { useDispatch } from 'react-redux'
import { Form, ButtonDiv, Link } from './Registration'

const initialValues = 
{
    username: "",
    password: "",
}

export default function Login() {
    
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const alerting = useContext(NotificationContext)

    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => 
    {
        if(error?.error){
            return alerting("error", error?.error)
        }
        if(message){
            return alerting("message", message)
        }
    }, [error, message])

    const onSubmit = async values => {
        setLoading(true)
        dispatch(login({form: values, setError, setMessage, setLoading, navigate}))
    }

    return(
        <Formik
            initialValues={initialValues}
            validateOnChange
            onSubmit={onSubmit}
            validationSchema={loginValidationScheme}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => {
                return(
                <Form>
                    <Title>Login</Title>

                    <Input type="text" autoComplete="off" value={values.username} handleBlur={handleBlur} handleChange={handleChange} name="username" placeholder="Write your username pls.">Username or email</Input>
                    {touched.username && errors.username ? <Error>{errors.username}</Error> : null}

                    <Input type="password" autoComplete="off" value={values.password} handleBlur={handleBlur} handleChange={handleChange} name="password" placeholder="Write your Password pls.">Password</Input>
                    {touched.password && errors.password ? <Error>{errors.password}</Error> : null}

                    <ButtonDiv>
                        <Button type="submit" disabled={!(dirty && isValid && !loading)} onSubmit={handleSubmit} >Submit</Button>
                        <Link to="/account/registration">Don't have account?</Link>
                    </ButtonDiv>
                </Form>
                )
            }}
        </Formik>
    )
}