import styled from "styled-components";

const Container = styled.form`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 68px;
    
    background: #FFFFFF;

    img {
        margin-bottom: 33px;
    }

    input {
        width: 303px;
        height: 45px;

        margin-bottom: 6px;

        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        text-indent: 11px;
        font-size: 20px;
        line-height: 25px;

        ::placeholder {
            color: #DBDBDB;
        }
    }

    a {
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`

const StyledButton = styled.button`
    width: 303px;
    height: 45px;

    border: hidden;

    background: #52B6FF;
    opacity: ${props => !props.disabled ? 1 : 0.7};
    border-radius: 5px;

    font-size: 21px;
    line-height: 26px;
    color: #FFFFFF;

    margin-bottom: 25px;
`

export { Container, StyledButton };