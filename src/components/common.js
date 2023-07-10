import styled from 'styled-components';
import {Link} from "react-router-dom";


export const Wrapper = styled.div`
margin: 0;
padding: 0;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`


export const Title = styled.div`
font-size: 30px;
margin: 20px;
`

export const LinkBtn = styled(Link)`
all: unset;
cursor: pointer;
margin: 20px;
`

export const Btn = styled.button`
    all: unset;

    background-color: #333399;
    color: white;

    padding: 10px;
    border-radius: 24px;`