"use client"

import { NextStepButton, Input, Form } from "../styled-components/global.styled"
import { useFormState } from "./FormContext"
import { useForm } from "react-hook-form"

type TFormValues = {
    client : string
}

export function BasicInfoForm() {
    const { onHandleNext, setFormData, formData } = useFormState()
    const { register, handleSubmit } = useForm<TFormValues>({
        defaultValues: formData
    })

    function onHandleFormSubmit(data:any){
        setFormData((prevFormData) => ({...prevFormData, ...data}))
        onHandleNext()
    }

    return (
        <Form onSubmit={handleSubmit(onHandleFormSubmit)}>
            <div>
                <Input type="text" id="client" placeholder="Nome do cliente ou CNPJ" {...register("client")} required />
            </div>

            <div id="clientSearchResult"></div>

            <div>
                <NextStepButton>Avançar para os detalhes</NextStepButton>
            </div>
        </Form>
    )
}