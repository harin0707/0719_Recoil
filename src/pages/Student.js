import React from 'react'
import {useParams} from 'react-router-dom';
import {Title, Wrapper} from "../components/common"

const Student = () => {
    const {studentNum} = useParams();

    return (
        <Wrapper>
        <Title>학생 {studentNum} 채점표</Title>

        </Wrapper>
    
    )
}

export default Student