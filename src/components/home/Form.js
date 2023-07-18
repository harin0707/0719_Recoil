import React from 'react'
import { styled } from 'styled-components';

const Form = ({type, title}) => {

    return (
        <Wrapper>
            <div>{title}</div>
            <Input></Input>
        </Wrapper>
)
}

export default Form

const Wrapper = styled.div`
`

const Input = styled.input`
`