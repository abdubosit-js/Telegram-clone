import React from 'react'
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import { Signin } from '../components/signin';
import { Signup } from '../components/signup';
import { Main } from './Main';

export const Container = () => {
    return (
        <Wrapper>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='signin' element={<Signin />} />
                <Route path='signup' element={<Signup />} />
            </Routes>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`