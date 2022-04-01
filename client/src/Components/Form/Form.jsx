import React from 'react'
import Login from './Login'
import Registration from './Registration'
import Verification from './Verification'

export default function Form({login, verification, verified}) {
    if(login){
        return(
            <Login />
        )
    }
    else if(verification){
        return(
            <>
                <Verification verified={verified}/>
            </>
        )
    }
    return(
        <>
            <Registration />
        </>
    )
}
