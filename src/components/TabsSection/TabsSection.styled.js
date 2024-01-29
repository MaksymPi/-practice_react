import { Link } from 'react-router-dom'
import styled from "styled-components";

export const TabsSectionStyled = {
    Navigation: styled.div`
 
`,
    Nav: styled.nav`
        display:flex;
        gap: 50px;
`,
    Link: styled(Link)`
        text-decoration: none;

        font-size: 24px;
        text-transform: uppercase;
        color: #2ea44f;

        transition: 0.3s;

        :hover {
            text-decoration: underline;
        }
`,
}