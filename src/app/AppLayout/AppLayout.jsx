import React from 'react'
import Header from '../../components/Header/Header'
import TabsSection from '../../components/TabsSection/TabsSection'
import { Wrapper } from './app-layout.styled'



const AppLayout = ({children}) => {
    return (
        <Wrapper>
            <header>
                <Header />
                <TabsSection />
            </header>
            <main>
            {children}
            </main>
            <footer>
                footer
            </footer>
        </Wrapper>
    )
}

export default AppLayout