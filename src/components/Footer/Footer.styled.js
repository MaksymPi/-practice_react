import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterStyled  = {
    Nav: styled.nav `
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
    `,
    Ul: styled.ul`
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction:column;
        align-items:center;
    `,
    Li: styled.li`
        list-style-type: none;
        margin-bottom: 10px;
    `,
    Link: styled(Link)`
        text-decoration: none;
        color: #2ea44f;
        transition: color 0.3s ease;
        &:hover {
            color: #3cd166;
        };
    `
  }
