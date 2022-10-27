import React from 'react'
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import PrivateRoute from '../components/privateRoutes';
import { Signin } from '../components/signin';
import { Signup } from '../components/signup';
import { Main } from './Main';

export const Container = () => {    
    return (
        <Wrapper>
            <Routes>
                    <Route path='/' element={
                        <PrivateRoute>
                            <Main />
                        </PrivateRoute>
                    } />
                <Route path='signin' element={<Signin />} />
                <Route path='signup' element={<Signup />} />
            </Routes>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`