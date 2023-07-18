import React,{useContext} from 'react'
import { userNameAtom } from '../recoil/atom'
import {useRecoilValue, useResetRecoilState} from 'recoil';
import { Title } from '../components/layout/common';
import { isSubmitedAtom } from '../recoil/atom';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/context';
import styled from 'styled-components';
import { Button } from '../components/layout/common';

const MyPage = () => {
    const mode = useContext(ThemeContext);
    const user = useRecoilValue(userNameAtom);
    const reset = useResetRecoilState(isSubmitedAtom);
    const navigate = useNavigate();

    const handleReset=()=>{
        reset();
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

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


