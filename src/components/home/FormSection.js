import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './Form.js'
import {Button} from '../layout/common.js';

import { ThemeContext } from '../../context/context';

import { useRecoilState } from 'recoil';
import { isSubmitedAtom } from '../../recoil/atom';

const FormSection = () => {
    const mode = useContext(ThemeContext); 
    const [isSubmited, setIsSubmited]=useRecoilState(isSubmitedAtom);


    const navigate = useNavigate();

    const handleClick=()=>{
        setIsSubmited(true);
        navigate('/mypage')
    }


    return (
    <>
        <Form inputType='name' type='text' title='이름'/>
        <Form inputType='email' type='email' title='이메일'/>

        <Button mode={mode.button} onClick={handleClick}>제출</Button>
    </>
    )
}

export default FormSection
