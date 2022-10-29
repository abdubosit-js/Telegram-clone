import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Menu } from '../assets/menu.svg'
import { logout } from '../store/mainSlice'
import { Wrapper } from '../styles/HeaderStyle'
import { MenuCnt } from '../styles/HeaderStyle'
import { Opasity } from '../styles/HeaderStyle'

export const Header = ({chatActive, isActive}) => {
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
                <a href='/signin' onClick={() => dispatch(logout())} className="signup_cnt">
                    <a href='/signin'>logout</a>
                </a>
            </MenuCnt>
            
            {active ?
                <Opasity onClick={() => setActive(false)}></Opasity>
            : ""}

            <Wrapper isActive={isActive}>
                <div className='menu-div'>
                    <Menu onClick={() => setActive(true)} className='menu-cnt'/>
                </div>
            
                <div className="search-cnt">
                    <input type="text" placeholder='search' />
                </div>
            
                <div className='group_container' onClick={() => chatActive(true)}>
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
