import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Attachment } from '../assets/attachment.svg'
import { ReactComponent as Send } from '../assets/send.svg'
import { deleted, fetchMessages, messages } from "../store/actions"
import { Wrapper } from '../styles/ChatStyle'

export const Chat = () => {
    const messageRef = useRef()
    const divRef = useRef(null)
    const [isScroll, setIsScroll] = useState(false)
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false)
    const { message } = useSelector(store => store)
    
    useEffect(() => {
        setLoader(true)
        const interval = setInterval(() => {
            dispatch(fetchMessages()).then(() => {
                if (divRef.current.scrollTop === 0) {
                    divRef.current.scrollIntoView()
                } 
            })
            setLoader(false)
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
                {loader ? 
                    <h1>loading...</h1>  
                 :
                  message.map((item) => 
                    <div key={item._id} className="message_wrapper">
                        <div className="profile-cnt">
                            {item.createdBy[0]}
                        </div>
                        <div className="message">
                            <p>{item.createdBy}</p>
                            <h4>{item.message}</h4>
                            <h6>{moment(item.createdDate).format("LT")}</h6>
                            {/* <div className='delete' onClick={() => dispatch(deleted(item._id))}>X</div> */}
                        </div>
                    </div>
                )}
                <div className='scrol' ref={divRef}></div>
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

