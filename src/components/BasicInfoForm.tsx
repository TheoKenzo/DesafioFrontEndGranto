import React, { useState } from 'react';
import { NextStepButton, Input, Form } from "../styled-components/global.styled";
import { useFormState } from "./FormContext";
import { useForm } from "react-hook-form";
import { ClientSearchResult } from "./ClientSearchResult";
import styles from "../styles/BasicInfoForm.module.css";

type TFormValues = {
    clientName: string
    clientCNPJ: string
}

export function BasicInfoForm() {
    const { onHandleNext, setFormData, formData } = useFormState();
    const { register, handleSubmit } = useForm<TFormValues>({
        defaultValues: formData
    });

    const [inputValue, setInputValue] = useState('');

    function onHandleFormSubmit(data: any) {
        setFormData((prevFormData) => ({ ...prevFormData, ...data }));
        onHandleNext();
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <Form onSubmit={handleSubmit(onHandleFormSubmit)}>
            <div className={styles.BasicInfoFormSearchSpace}>
                <div>
                    <Input type="text" id="client" placeholder="Nome do cliente ou CNPJ" {...register("clientName")} required value={inputValue} onInput={handleInputChange} />
                </div>
                
                <ClientSearchResult />
            </div>

            <div>
                <NextStepButton>Avançar para os detalhes</NextStepButton>
            </div>
        </Form>
    )
}
