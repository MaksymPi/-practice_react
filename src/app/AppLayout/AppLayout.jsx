import React from 'react'
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
            <footer>
                footer
            </footer>
        </Styled.Wrapper>
    )
}

export default AppLayout