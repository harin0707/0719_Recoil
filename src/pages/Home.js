import React from 'react'
import styled from 'styled-components';

import FormSection from '../components/home/FormSection.js';

const Main = () => {

    return (
        <>
        <Wrapper>
            <FormSection />
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
