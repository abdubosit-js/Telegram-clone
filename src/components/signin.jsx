import { Button, TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { signin } from '../store/actions'

export const Signin = () => {
    const userNameRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { auth } = useSelector(store => store)

    useEffect(() => {
        if (auth) navigate("/signin");
    }, [navigate, auth])

    function signinHandler() {
        const data = {
            username: userNameRef.current.value,
            password: passwordRef.current.value
        } 
        
        dispatch(signin(data)).then(() => navigate("/"))
    }
    return (
        <Wrapper>
            <div className="signin_wrapper">
               <h1>Sign up</h1>
                <TextField id="standard-basic" inputRef={userNameRef} label="User Name" variant="standard" />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    inputRef={passwordRef}
                    autoComplete="current-password"
                    variant="standard"
                />
                <Button onClick={() => signinHandler()} variant="contained">submit</Button>
                <div className='links'>
                    <span>Don't have an account? <Link to="/signup">signup</Link></span>
                </div>
           </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    background-color: white;
    border-top: 1px solid transparent;
    .signin_wrapper {
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
