import styled from "styled-components";

export const AppLayoutStyled = {
    Wrapper: styled.div`
        min-height: 100vh;
        max-width: 1200px;
        min-width: 375px;

        padding: 0 16px;
        margin: 0 auto;

        display: flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center
`,
    Header: styled.header`
        height: 100px;
        width:100%;
        padding:0 16px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background: #212121;

    `,
    Footer: styled.footer `
        height: 100%;
        width:100%;
        padding: 0 20px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background: #1F1A00;

    `,
};