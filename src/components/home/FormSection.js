import React,{useContext} from 'react'
import Form from './Form'
import {styled} from 'styled-components';

import { ThemeContext } from '../../context/context';

// import {useRecoilState} from 'recoil';
// import { userInfoAtom } from '../../recoil/atom';

const FormSection = () => {
    const mode = useContext(ThemeContext); 
    return (
    <>
        <Form type='name' title='이름'/>
        <Form type='email' title='이메일'/>
        <Form type='owner' title='강아지? 고양이?'/>
        
        <Button mode={mode.button}>버튼</Button>
    </>
    )
}

export default FormSection


const Button = styled.button`
all: unset;
background-color: ${props=>props.mode};
/* background-color: red; */
color: white;
padding: 10px;
border-radius: 24px;

`