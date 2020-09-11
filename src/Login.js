import React, { useState } from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { auth } from './firebase'
import { provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }
            ).catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT9rXA0DaXkYPz0JtMbLBI-jamn1rkMSh0Wg&usqp=CAU" alt="" />

                <div className="login__text">
                    <h1>Sign in to Fake-Chat!</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
