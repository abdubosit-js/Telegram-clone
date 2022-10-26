import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ReactComponent as Attachment } from '../assets/attachment.svg'
import { ReactComponent as Send } from '../assets/send.svg'
import { fetchMessages, messages } from "../store/actions"

export const Chat = () => {
    const messageRef = useRef()
    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false)
    const { message } = useSelector(store => store)
    // const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    // console.log(randomColor)
    console.log(isActive)
    
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(fetchMessages())
        }, 3000)
        return () => clearInterval(interval);
    }, [])

    function messagesHandler() {
        dispatch(messages({message: messageRef.current.value}))
        messageRef.current.value = ""
    }

    return (
        <Wrapper>
            <div className="top-group-name-cnt">
                <div className='group-image'>
                    PDP G5
                </div>
                <div className='group-name'>
                    <h2>Frontend G5</h2>
                    <p>12 members</p>
                </div>
            </div>
            <div className="messages_container">
                {message.map((item) => 
                    <div key={item._id} className="message_wrapper">
                        <div className="profile-cnt">
                            {item.createdBy[0]}
                        </div>
                        <div className="message" onContextMenu={() => setIsActive(true)}>
                            <p>{item.createdBy}</p>
                            <h4>{item.message}</h4>
                            <h6>{ moment(item.createdDate).format("LT") }</h6>
                        </div>
                        <div className='scrol'></div>
                    </div>
                )}
            </div>
            <div className="chat_wrapper">
                <div className='chat'>
                    <input type="text" ref={messageRef} placeholder='Write a message...'/>
                    <Attachment className='attachment'/>
                    <Send className='send' onClick={messagesHandler}/>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    .top-group-name-cnt {
        width: 100%;
        height: 83px;
        border-bottom: 1px solid #A1AAB3;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 0 30px;
        .group-image {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #10a100;
            color: white;
            font-size: 11px;
            font-weight: 600;
        }
        .group-name {
            h2 {
                color: #ffffff;
            }

            p {
                color: #A1AAB3;
            }
        }
    }
    .chat_wrapper {
        width: 100%;
        height: 53px;
        background-color: transparent;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .chat {
            width: 95%;
            height: 53px;
            position: relative;
            background-color: #383442;
            border-radius: 8px;
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
                top: 2px;
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
                top: 2px;
                right: 30px;
                cursor: pointer;
                path {
                    fill: #0099ff;
                }
            }
        }   
    }
    
    .messages_container {
        width: 100%;
        height: 78vh;
        overflow: scroll;
        overflow-x: hidden;
        padding: 20px 40px;
        padding-bottom: 1px;
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: #ffffff; 
            border-radius:10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #dbdbdb; 
        } 
    }

    .message_wrapper {
        position: relative;
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 15px;

        .profile-cnt {
            width: 40px;
            height: 40px;
            color: white;
            font-size: 10px;
            text-transform: capitalize;
            display: flex;
            align-items: center;
            margin-top: 35px;
            justify-content: center;
            border-radius: 50%;
            background-color: red;
        }

        .message {
            min-height: 70px;
            background: #383442;
            display: flex;
            flex-direction: column;
            padding: 3px 10px;
            border-radius: 14px 14px 14px 4px;
            position: relative;
            p {
                color: green;
                font-weight: 600;
                text-transform: capitalize;
            }
           
            h4 {
                color: white;
                font-weight: 400;
            }
            
            h6 {
                margin-top: 6px;
                font-style: normal;
                font-weight: 350;
                font-size: 12px;
                line-height: 14px;
                text-align: right;
                color: #A1AAB3;
            }
        }
    }
`