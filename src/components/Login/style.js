import styled from "styled-components";

const Container = styled.form`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 68px;

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

    button {
        width: 303px;
        height: 45px;

        border: hidden;

        background: #52B6FF;
        border-radius: 5px;

        font-size: 21px;
        line-height: 26px;
        color: #FFFFFF;

        margin-bottom: 25px;
    }

    p {
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`

export { Container };