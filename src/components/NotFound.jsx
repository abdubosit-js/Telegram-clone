import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotFound = () => {
  return (
    <Wrapper>
        <h1>404</h1>
        <Link to="/main">Home</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    
`