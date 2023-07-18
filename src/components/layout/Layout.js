import React,{useContext, useState} from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../../context/context';
import { Button } from './common';

import { useRecoilValue } from 'recoil';
import { isSubmitedAtom, userNameAtom, emailAtom } from '../../recoil/atom';

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

    const isSubmited = useRecoilValue(isSubmitedAtom);
    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);

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

        <Footer mode={mode.main}>
            {!isSubmited===true ? '':`|| ${userName}의 공간 || 이메일 주소: ${email} ||`}
        </Footer>

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

const Header = styled.div`
display: flex;
height: 100px;
width: 100%;
justify-content: center;
align-items: center;

background-color: ${props=>props.mode};
`

const Footer = styled.div`
display: flex;
height: 50px;
width: 100%;
justify-content: center;
align-items: center;
color: white;

background-color: ${props=>props.mode};
`