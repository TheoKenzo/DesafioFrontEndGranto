import { SearchResultButton } from "@/styled-components/BasicInfoForm.styled"
import styles from "../styles/BasicInfoForm.module.css"
import { useState } from 'react';

function ClientSearchResultItem(props: { nome: string; cnpj: string }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <SearchResultButton onClick={handleButtonClick} className={isClicked ? styles.BasicInfoFormResultButtonTrue : styles.BasicInfoFormResultButtonFalse} type="button">
                <div>
                    <p className={styles.BasicInfoFormResultLabel}>Nome</p>
                    <p className={styles.BasicInfoFormResultText}>{props.nome}</p>
                </div>

                <div>
                    <p className={styles.BasicInfoFormResultLabel}>CNPJ</p>
                    <p className={styles.BasicInfoFormResultText}>{props.cnpj}</p>
                </div>
            </SearchResultButton>
        </div>
    );
}

export function ClientSearchResult() {
    const clientsArray = [
        { nome: "Americanas S.A", cnpj: "00.776.547/001-56" },
        { nome: "Granto Seguros", cnpj: "09.013.155/0001-37" }
    ]

    const inputElement: HTMLInputElement | null = document.querySelector("#client")

    const searchResult = [];

    if (inputElement !== null && inputElement.value !== "") {
        const inputData = inputElement.value

        for (let i = 0; i < clientsArray.length; i++) {
            if (clientsArray[i].nome.toLowerCase().includes(inputData.toLowerCase()) || clientsArray[i].cnpj.toLowerCase().includes(inputData.toLowerCase())) {
                searchResult.push(
                    <ClientSearchResultItem key={i} nome={clientsArray[i].nome} cnpj={clientsArray[i].cnpj} />
                )
            }
        }
    }

    return (
        <div>
            {searchResult}
        </div>
    )
}
