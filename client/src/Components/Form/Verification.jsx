import React, { useContext, useState, useEffect } from 'react'
import Button from './Form_Components/Button'
import Input from './Form_Components/Input'
import Title from './Form_Components/Title'
import { useSelector } from 'react-redux'
import { Form, ButtonDiv } from './Registration'
import { NotificationContext } from '../../Hooks/Alert/NotificationProvider'
import { sendVerificationEmail } from './useHttp'
import styled from 'styled-components'

const VerifiedTitle = styled.h2`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
`

export default function Verification({ verified }) {
    const email = useSelector(state => state.user.email)
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const alerting = useContext(NotificationContext)
    console.log(loading);
    useEffect(() => 
    {
        if(message){
            return alerting("message", message)
        }
        if(error){
            return alerting("error", error)
        }
    }, [message, error])

    const submit = e => 
    {
        e.preventDefault();
        setLoading(true)
        sendVerificationEmail(setMessage, email, setError, setLoading)
    }
    return(
        <>
        {
            verified === "false"
            ?
            <Form onSubmit={e => submit(e)}>
                <Title>Verification</Title>
                <Input disabled={true} value={email}>We send verification href to your email</Input>
                <ButtonDiv>
                    <Button big={true} disabled={loading && !error} type="submit">Send Mail</Button>
                </ButtonDiv>
            </Form>
            :
            <Form>
                <VerifiedTitle>You are verified</VerifiedTitle>
            </Form>
        }
        </>
    )
}