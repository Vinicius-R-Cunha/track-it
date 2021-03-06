import styled from "styled-components";

const Nav = styled.nav`
    width: 100%;
    height: 70px;

    background: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 0 36px;

    position: fixed;
    bottom: 0;
    z-index: 1;

    a {
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }

    .circle-div {
        width: 91px;
        height: 91px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        bottom: 10px;
        right: 0;
        left: 0;
        margin: 0 auto;

        color: #FFFFFF;
    }
`

export { Nav }