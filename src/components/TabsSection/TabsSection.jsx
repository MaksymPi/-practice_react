import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/Routes'


import { TabsSectionStyled as Styled } from './TabsSection.styled'

const TabsSection = () => {
    return (
        <Styled.Navigation>
            <Styled.Nav>
                <Styled.Link to={ROUTES.category}>Category</Styled.Link>
                <Styled.Link to={ROUTES.feedback}>Feedback</Styled.Link>
                <Styled.Link to={ROUTES.names}>Names of heroes</Styled.Link>
            </Styled.Nav>
        </Styled.Navigation>

    )
}

export default TabsSection