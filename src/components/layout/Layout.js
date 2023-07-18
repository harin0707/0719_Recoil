import React,{useContext, useState} from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../../context/context';

const Layout= ({children}) => {
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
    <ThemeContext.Provider value={mode}>
        <Wrapper>

        <Header mode={mode.main}>
            <Button value='blue' onClick={handleTheme} >Blue</Button>
            <Button value='green' onClick={handleTheme} >Green</Button>
            <Button value='pink' onClick={handleTheme} >Red</Button>
        </Header>

    
        <div>{children}</div>

        <div>누구누구의 공간 연락은 여기 이메일로</div>

        </Wrapper>

    </ThemeContext.Provider>

    
    </>
    )
}

export default Layout

const Wrapper = styled.div`
margin: 0;
padding: 0;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const Button = styled.button`
all: unset;
background-color: ${props=>props.mode};
color: white;
padding: 10px;
border-radius: 24px;
`

const Header = styled.div`
display: flex;
height: 100px;
width: 100%;
background-color: ${props=>props.mode};

justify-content: center;
align-items: center;
`