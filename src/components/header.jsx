import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Menu } from '../assets/menu.svg'

export const Header = () => {

    const [active, setActive] = useState(false)

    return (
        <>
            <MenuCnt active={active}></MenuCnt>
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
    background-color: #555555;
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
    background-color: #555555;
    position: absolute;
    transition: 0.3s;
    left: ${({active}) => active ? "0px" : "-300px"};
`

const Opasity = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: #00000090;
`