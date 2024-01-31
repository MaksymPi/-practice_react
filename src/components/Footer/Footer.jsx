import React from 'react'
import { Link } from 'react-router-dom'

import { FooterStyled as Styled } from '../Footer/Footer.styled'

const Footer = () => {
    return (
        <Styled.Nav>
            <Styled.Ul>
                <Styled.Li> <h3>Contact</h3></Styled.Li>
                <Styled.Li><Link to="tel:+4733378901">+48 575 964 899</Link></Styled.Li>
                <Styled.Li> <Link to = "mailto: max.pismenniy@icloud.com">max.pismenniy@icloud.com</Link></Styled.Li>
            </Styled.Ul>
            <Styled.Ul>
                <Styled.Li><p>by Maksym Pysmennyi</p></Styled.Li>
            </Styled.Ul>
            <Styled.Ul>
                <Styled.Li><h3>Social network</h3></Styled.Li>
                <Styled.Li><Link to = "https://www.linkedin.com/in/pysmennyi-maksym-689b02261/" target="_blank">linkedin</Link></Styled.Li>
                <Styled.Li><Link to = "https://www.instagram.com/" target="_blank">Instagram</Link></Styled.Li>
                <Styled.Li><Link to = "https://www.facebook.com/max.pismenniy.50/" target="_blank">Facebook</Link></Styled.Li>
            </Styled.Ul>
        </Styled.Nav>

    )
}

export default Footer