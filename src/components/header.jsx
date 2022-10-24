import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Menu } from '../assets/menu.svg'

export const Header = () => {

    const [active, setActive] = useState(false)

    return (
        <>
            <MenuCnt active={active}>
                <div className="profile-cnt">
                    <div className='avatar-cnt'>
                        A
                    </div>
                </div>
                <div className="signup_cnt">
                    <Link to="/signup">create account</Link>
                </div>
                <div className="signin-cnt">
                    <Link to="/signin">sign in</Link>
                </div>
            </MenuCnt>
            {active ?
                <Opasity onClick={() => setActive(false)}></Opasity>
            : ""}
            <Wrapper>
                <div className='menu-div'>
                    <Menu onClick={() => setActive(true)} className='menu-cnt'/>
                </div>
                <div className='chanel-group'>PDP</div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 80px;
    height: 100vh;
    background-color: #212245;
    padding: 10px;
    .chanel-group {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ff4c4c;
        font-weight: 600;
        color: white;
        cursor: pointer;
    }
    .menu-div{
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
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
    background-color: #212245;
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