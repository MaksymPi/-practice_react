import React from 'react'
import Header from '../../components/Header/Header'
import TabsSection from '../../components/TabsSection/TabsSection'
import { Wrapper } from './app-layout.styled'


import CategorySection from '../../components/CategorySection/CategorySection'

const AppLayout = () => {
    return (
        <Wrapper>
            <header>
                <Header />
                <TabsSection />
            </header>
            <main>
            <CategorySection/>
            </main>
            <footer>
                footer
            </footer>
        </Wrapper>
    )
}

export default AppLayout