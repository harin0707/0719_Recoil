import React from 'react'
import {useParams} from 'react-router-dom';

const Student = () => {
    const studentNum = useParams();
    return (
    <div>학생 {studentNum} 채점표</div>
    )
}

export default Student