import React,{useContext, useState} from 'react'
import styled from 'styled-components';
import  Form from '../components/home/Form.js'
import { ThemeContext } from '../context/context.js'

const Main = () => {
    const context = useContext(ThemeContext);
    const [mode, setMode] = useState(context.blueTheme);

    const handleTheme = (e)=>{
        const color = e.target.value;

        if (color==='blue'){
            setMode(context.blueTheme);
        }
        else if (color==='green'){
            setMode(context.greenTheme);
        }
        else {
            setMode(context.pinkTheme);
        }
        console.log(mode);
    }

    return (
        <>
        <Wrapper>

            <BtnContainer mode={mode.main}>
            <Button value='blue' onClick={handleTheme} >Blue</Button>
            <Button value='green' onClick={handleTheme} >Green</Button>
            <Button value='pink' onClick={handleTheme} >Red</Button>
            </BtnContainer>

            <Form type='name' title='이름'/>
            <Form type='nickname' title='별명'/>
            <Form type='message' title='하고싶은 말'/>

            <Button mode={mode.button}>버튼</Button>

            <div> </div>
        
        </Wrapper>
        </>
        
    )
}

export default Main

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Button = styled.button`
all: unset;
background-color: ${props=>props.mode};
color: white;
padding: 10px;
border-radius: 24px;

`

const BtnContainer = styled.div`
display: flex;
height: 100px;
width: 100%;
background-color: ${props=>props.mode};

justify-content: center;
align-items: center;
`