import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import TabsSection from '../../components/TabsSection/TabsSection'




import { AppLayoutStyled as Styled } from '../AppLayout/AppLayout.styled'


const AppLayout = ({ children }) => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
                <TabsSection />
            <main>
                {children}
            </main>
            <Styled.Footer>
                <Footer/>
            </Styled.Footer>
        </Styled.Wrapper>
    )
}

export default AppLayout