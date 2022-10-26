import React from 'react'
import styled from 'styled-components'
import { Chat } from '../components/chat';
import { Header } from '../components/header';

export const Main = () => {
    
    return (
        <Wrapper>
            <div className="flex_container">
                <Header />
                <Chat />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    .flex_container {
        width: 100%;
        display: flex;
        align-items: center;
    }
`