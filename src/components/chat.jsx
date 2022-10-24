import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Attachment } from '../assets/attachment.svg'
import { ReactComponent as Send } from '../assets/send.svg'

export const Chat = () => {
  return (
    <Wrapper>
        <div className='chat'>
            <input type="text" placeholder='Write a message...'/>
            <Attachment className='attachment'/>
            <Send className='send'/>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    .chat {
        width: 100%;
        height: 80px;
        background-color: #212245;
        border-left: 2px solid gray;
        position: fixed;
        bottom: 0;
        input {
            padding: 10px 60px;
            width: 100%;
            min-height: 100%;
            border: none;
            outline: none;
            background-color: transparent;
        }
        input[type="text"] {
            color: white;
            font-size: 20px;
        }
        .attachment {
            position: absolute;
            top: 15px;
            left: 5px;
            transform: rotate(120deg);
            cursor: pointer;
            :hover {
                path {
                    fill: white;
                }
            }
        }
        .send {
            position: absolute;
            top: 15px;
            right: 100px;
            cursor: pointer;
            path {
                fill: #0099ff;
            }
        }
    }   
`