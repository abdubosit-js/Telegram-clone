import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ReactComponent as Menu } from '../assets/menu.svg'
import { logout } from '../store/mainSlice'

export const Header = () => {
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const { message } = useSelector(store => store)
    

    return (
        <>
            <MenuCnt active={active}>
                <div className="profile-cnt">
                    <div className='avatar-cnt'>
                        A
                    </div>
                </div>
                <a href='' onClick={() => dispatch(logout())} className="signup_cnt">
                    <a href='' onClick={() => dispatch(logout())}>logout</a>
                </a>
            </MenuCnt>
            {active ?
                <Opasity onClick={() => setActive(false)}></Opasity>
            : ""}
            <Wrapper>
                <div className='menu-div'>
                    <Menu onClick={() => setActive(true)} className='menu-cnt'/>
                </div>
                <div className="search-cnt">
                    <input type="text" placeholder='search' />
                </div>
                <div className='group_container'>
                    <div className="line"></div>
                    <div className='chanel-group'>PDP G5</div>
                    <div className='title-container'>
                        <h2>Frontend G5</h2>
                        <p>{message.length} messages</p>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 400px;
    height: 100vh;
    background-color: #141120;
    padding: 10px;
    .group_container {
        width: 100%;
        height: 70px;
        display: flex;
        cursor: pointer;
        .line {
            width: 3px;
            border-radius: 2px;
            height: 30px;
            background-color: #60CDFF;
            margin-left: -10px;
        }
        h2 {
            color: white;
        }

        p {
            color: gray;
        }
        gap: 14px;
        align-items: center;
        background-color: #383442;
        border-radius: 5px;
        padding-left: 10px;
        .chanel-group {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #10a100;
            font-weight: 600;
            font-size: 12px;
            color: white;
            cursor: pointer;
        }
      
    }
    .search-cnt {
        width: 100%;
        height: 35px;
        background: #383442;
        border-radius: 5px;
        input {
            background: transparent;
            width: 100%;
            height: 100%;
            padding-left: 20px;
            border: none;
            outline: none;
        }
        input[type="text"] {
            color: white;
            font-family: sans-serif;
        }
        margin-bottom: 15px;
    }

    .menu-div{
        width: 60px;
        height: 60px;
        .menu-cnt {
            max-width: 100%;
            max-height: 100%;
            cursor: pointer;
            :hover {
                path {
                    fill: white;
                }
            }
        }
    }
`

const MenuCnt = styled.div`
    z-index: 10;
    width: 300px;
    height: 100vh;
    background-color: #141120;
    position: absolute;
    transition: 0.3s;
    left: ${({active}) => active ? "0px" : "-300px"};
    display: flex;
    flex-direction: column;
    .signup_cnt {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 15px;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        :hover {
            background-color: #383442;
        }
        button {
            background-color: transparent;
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
        }
        cursor: pointer;
    }
    .signin-cnt {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 15px;
        border-bottom: 1px solid gray;
    }
    .profile-cnt {
        width: 100%;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        .avatar-cnt {
            width: 60px;
            height: 60px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            font-weight: 600;
            background-color: green;
            border-radius: 50%;
        }
    }
    a {
        color: white;
        text-decoration: none;
    }
`

const Opasity = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: #00000090;
`