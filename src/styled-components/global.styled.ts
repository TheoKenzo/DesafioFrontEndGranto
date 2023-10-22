import styled from "styled-components"

export const Form = styled.form`
    min-height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
`

export const Input = styled.input`
    display: flex;
    width: 636px;
    
    padding: 12px 16px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #E2E0E5;
    background: #FFF;

    /*Estilos do texto*/

    color: #C6C2CC;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
`

export const NextStepButton = styled.button`
    display: inline-flex;
    padding: 12px 24px;
    align-items: flex-start;
    gap: 10px;
    border: none;
    border-radius: 6px;
    background: #5828AC;

    /*Estilos do texto*/

    color: #FFFFFF;
    text-align: center;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 125% */
`

export const BackStepButton = styled(NextStepButton)`
    background: #EEEDF0;

    /*Estilos do texto*/

    color: #423D4D;
`
