import { Formik } from 'formik'
import React, {useContext, useEffect, useState} from 'react'
import { Link as A, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Form_Components/Button'
import Error from './Form_Components/Error'
import Input from './Form_Components/Input'
import Title from './Form_Components/Title'
import { registration } from './useHttp'
import { registrationValidationScheme } from './Yup/ValidationSchemes'
import { NotificationContext } from '../../Hooks/Alert/NotificationProvider'
import { useDispatch } from 'react-redux'

const initialValues = 
{
    username: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: ""
}
export const Form = styled.form` 
    position: relative;  
    left: 50%;
    min-width: 400px;
    display: inline-block;
    transform: translateX(-50%);
    margin-top: 40px;
    border-radius: 10px;
    padding: 30px 40px;
    @media (max-width: 430px)
    {
        padding: 25px 35px;
    }
    background-color: ${({ theme }) => theme.colors.defaultColor};
    @media (max-width: 430px)
    {
        margin-top: 30px;
        min-width: 0;
        width: 95%;
    }
`
export const ButtonDiv = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: flex-start;
    align-items: center;
`
export const Link = styled(A)`
    color: ${({ theme }) => theme.colors.secondColor};
    text-decoration: none;
    margin-left: 15px;
    @media (max-width: 430px)
    {
      padding: 5px 15px;
      font-size: 14px;
    }
`

export default function Registration() {
    
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
        dispatch(registration({form: values, setError, setMessage, setLoading, navigate}))
    }

    return(
        <Formik
            initialValues={initialValues}
            validateOnChange
            onSubmit={onSubmit}
            validationSchema={registrationValidationScheme}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => {
                return(
                <Form>
                    <Title>Registration</Title>

                    <Input type="text" autoComplete="off" value={values.username} handleBlur={handleBlur} handleChange={handleChange} name="username" placeholder="Write your username pls.">Username</Input>
                    {touched.username && errors.username ? <Error>{errors.username}</Error> : null}

                    <Input type="text" autoComplete="off" value={values.nickname} handleBlur={handleBlur} handleChange={handleChange} name="nickname" placeholder="Write your Nickname pls.">Nickname</Input>
                    {touched.nickname && errors.nickname ? <Error>{errors.nickname}</Error> : null}

                    <Input type="email" autoComplete="on" value={values.email} handleBlur={handleBlur} handleChange={handleChange} name="email" placeholder="Write your Email pls.">Email</Input>
                    {touched.email && errors.email ? <Error>{errors.email}</Error> : null}

                    <Input type="password" autoComplete="off" value={values.password} handleBlur={handleBlur} handleChange={handleChange} name="password" placeholder="Write your Password pls.">Password</Input>
                    {touched.password && errors.password ? <Error>{errors.password}</Error> : null}

                    <Input type="password" autoComplete="off" value={values.confirmPassword} handleBlur={handleBlur} handleChange={handleChange} name="confirmPassword" placeholder="Confirm Password pls.">Confirm Password</Input>
                    {touched.confirmPassword && errors.confirmPassword ? <Error>{errors.confirmPassword}</Error> : null}

                    <ButtonDiv>
                        <Button type="submit" disabled={!(dirty && isValid && !loading)} onSubmit={handleSubmit} >Submit</Button>
                        <Link to="/account/log-in">Have already account?</Link>
                    </ButtonDiv>
                </Form>
                )
            }}
        </Formik>
    )
}