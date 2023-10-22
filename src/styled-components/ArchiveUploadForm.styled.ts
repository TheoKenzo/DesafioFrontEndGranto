import styled from "styled-components"

export const InputFile = styled.label`
    width: 420px;
    height: 223px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px dashed #C6C2CC;
    gap: 24px;

    /*Estilos do texto*/

    color: #C6C2CC;
    font-family: Mulish;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const SelectedArchivesDiv = styled.div`
    width: 405px;
    height: 90px;
    display: flex;
    justify-content: space-between;
`

export const SelectedArchivesDivData = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SelectedArchivesSelect = styled.select`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('../styles/svg/cheveron-down-ArchiveUploadForm.svg');
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: right center;
    min-width: 101px;
    height: 21px;   
    display: flex;
    padding: 4px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: #5828AC;

    /*Estilos do texto*/

    color: #FFFFFF;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`