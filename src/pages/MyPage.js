import React,{useContext} from 'react'
import {useRecoilValue, useResetRecoilState} from 'recoil';
import { Title } from '../components/layout/common';
import { isSubmitedAtom, emailAtom , userNameAtom} from '../recoil/atom';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/context';
import { Button, Wrapper } from '../components/layout/common';

const MyPage = () => {
    const mode = useContext(ThemeContext);
    const user = useRecoilValue(userNameAtom);
    const resetSubmit = useResetRecoilState(isSubmitedAtom);
    const resetName = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const navigate = useNavigate();

    const handleReset=()=>{
        resetSubmit();
        resetName();
        resetEmail();
        navigate('/');
    }
    
    return (
        <>
        <Wrapper>
            <Title>welcome {user}</Title>
            <Button mode={mode.button} onClick={handleReset}> 리셋 </Button>
        </Wrapper>
        
        </>
    )
}

export default MyPage


