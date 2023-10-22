import { NextStepButton } from "@/styled-components/global.styled"

export function ClientSearchResult(){
    const clientsArray =[
        {nome: "Americanas S.A", 
        cnpj: "00.776.547/001-56"}
    ]

    let searchResult = []
    const inputElement: HTMLInputElement | null = document.querySelector("#client")

    if(inputElement){
        const inputData = inputElement.value

        for (let i = 0; i < clientsArray.length; i ++){
            if (clientsArray.toString.name.toLowerCase().indexOf(inputData.toLowerCase())){
                searchResult.push (
                    <div>
                        <NextStepButton >
                            Botão
                        </NextStepButton>
                        asd
                    </div>
                )
            }
        }
    }

    return (
        searchResult
    )
}