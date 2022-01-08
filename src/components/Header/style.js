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
    padding-right: 18px;

    position: fixed;
    top: 0;
    z-index: 1;

    
    div {
        display: flex;
        align-items: center;
        
        p {
            font-family: Playball;
            font-size: 39px;
            line-height: 49px;
            color: #FFFFFF;
        }
        ion-icon {
            font-size: 30px;
            color: #FFFFFF;

            margin: 0 12px;
        }

    }

    img {
        width: 51px;
        height: 51px;
        
        border-radius: 98.5px;
    }

`

export { CustomHeader }