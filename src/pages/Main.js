import React from 'react'
import {Wrapper, Title, LinkBtn} from '../components/common.js';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
    const navigate = useNavigate();

    return (
        
        <Wrapper>

        <Title>채점표</Title>
        <Button onClick ={()=>{navigate('/student/1');}} iscomleted={false}>학생1 채점하러가기</Button>
        <Button onClick ={()=>{navigate('/student/2');}} iscompleted={true}>학생2 채점하러가기</Button>

        <LinkBtn to='/result'> 결과 확인</LinkBtn>


        </Wrapper>
    )
}

export default Main


const Button = styled.button`
    all: unset;
    background-color:${props=> props.iscompleted ? '#DC143C' : '#333399'};
    color: white;
    padding: 10px;
    border-radius: 24px;
    margin: 10px;
    cursor: pointer;
`