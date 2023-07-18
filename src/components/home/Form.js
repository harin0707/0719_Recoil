import React from 'react'
import { styled } from 'styled-components';

import {useRecoilState} from 'recoil';
import { userNameAtom, emailAtom } from '../../recoil/atom';

const Form = ({title, type, inputType}) => {
    const [userName, setUserName] = useRecoilState(userNameAtom); 
    const [email, setEmail] = useRecoilState(emailAtom); 

    const onChange = (e) =>{
        const input = e.target.value;
        if (type==='name'){
            setUserName(input);
        }
        else{
            setEmail(input);
        }
    }

    return (
        <Wrapper>
            <div>{title}</div>
            <input type={inputType} onChange={onChange}></input>
        </Wrapper>
)
}

export default Form

const Wrapper = styled.div`
display: flex;
flex-direction: column;

margin-bottom: 20px;
`
