import styled from "styled-components";

const CustomHeader = styled.header`
    width: 100%;
    height: 70px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    padding-left: 18px;
    padding-right: 18px;

    position: fixed;
    top: 0;
    z-index: 1;

    p {
        font-family: Playball;
        font-size: 39px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;

        border-radius: 98.5px;
    }

`

export { CustomHeader }