import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    height: 75px;
    border-radius: 15px;
    margin-bottom: 1rem;
    box-shadow: 0 0 10px gray;

    input {
        width: 90%;
        height: 60%;
        border-radius: 5px;
        background-color: gray;
        color: white;
        text-align: end;
        font-size: 1.5rem;
        outline: none;
        box-shadow: inset 0 0 4px black;
        padding-right: 1rem;
    }
`
