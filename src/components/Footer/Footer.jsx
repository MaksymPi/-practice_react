import React from 'react'
import { Link } from 'react-router-dom'

import { FooterStyled as Styled } from '../Footer/Footer.styled'

const Footer = () => {
    return (
        <Styled.Nav>
            <ul>
                <li> <h3>Contact</h3></li>
            </ul>
            <ul>
                <li><p>by Maksym Pysmennyi</p></li>
            </ul>
            <ul>
                <li><h3>Social network</h3></li>

            </ul>
        </Styled.Nav>

    )
}

export default Footer