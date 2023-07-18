import React from 'react'
import { styled } from 'styled-components';

import {useRecoilState} from 'recoil';
import { userNameAtom, emailAtom, ownerAtom } from '../../recoil/atom';

const Form = ({title, type}) => {
    const [userName, setUserName] = useRecoilState(userNameAtom); 
    const [email, setEmail] = useRecoilState(emailAtom); 
    const [owner, setOwner] = useRecoilState(ownerAtom); 

    const onChange = (e) =>{
        if (type==='name'){
            setUserName({name:e.target.value});
        }
        else if (type==='email'){
            setEmail({nickname:e.target.value});
        }
        else{
            setOwner({type:e.target.value});
        }

        console.log(userName);
        console.log(email);
        console.log(owner);
    }

    return (
        <Wrapper>
            <div>{title}</div>
            <Input onChange={onChange}></Input>
        </Wrapper>
)
}

export default Form

const Wrapper = styled.div`
`

const Input = styled.input`
`