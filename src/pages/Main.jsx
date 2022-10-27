import React , { useState } from 'react'
import styled from 'styled-components'
import { Chat } from '../components/chat';
import { Header } from '../components/header';

export const Main = () => {
    const [chatActive, setChatActive] = useState(false)

    return (
        <Wrapper>
            <div className="flex_container">
                <Header 
                    chatActive={setChatActive}
                    isActive={chatActive}
                />
                {chatActive ? (
                    <Chat />
                ) : (
                    <div className='selected-chat-text'>
                        <p>select a chat to start messaging</p>
                    </div>
                )}
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
        .selected-chat-text {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            p {
                cursor: context-menu;
                background-color: #00000032;
                padding: 5px 10px;
                color: white;
                border-radius: 15px;
                padding-bottom: 8px;
            }
        }
    }
`