import { Button, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { signup } from '../store/actions'

export const Signup = () => {
    const userNameRef = useRef()
    const passwordRef = useRef()
    const confirmPaswordRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function signupHandler() {
        const data = {
            username: userNameRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: passwordRef.current.value
        }
        
        dispatch(signup(data)).then(() => navigate("/signin"))
    }
    return (
       <Wrapper>
           <div className="signup_wrapper">
               <h1>Sign up</h1>
                <TextField id="standard-basic" inputRef={userNameRef} label="User Name" variant="standard" />
                <TextField
                    inputRef={passwordRef}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    inputRef={confirmPaswordRef}
                    id="standard-password-input"
                    label="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <Button onClick={() => signupHandler()} variant="contained">submit</Button>
                <div className='links'>
                    <span>Do you have an account? <Link to="/signin">signin</Link></span>
                </div>
           </div>
       </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    background-color: white;
    border-top: 1px solid transparent;
    .signup_wrapper {
        max-width: 450px;
        display: flex;
        gap: 15px;
        flex-direction: column;
        margin: 160px auto;

        h1 {
            margin: auto;
        }

        button {
            margin-top: 12px;
        }
        .links {
            a {
                color: blue;
                text-decoration: none;
                border-bottom: 2px solid blue;
            }
        }
    }
`