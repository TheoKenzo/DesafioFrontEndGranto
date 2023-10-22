"use client"

import { Select, TextArea, Option } from "../styled-components/DetailsForm.styled"
import { NextStepButton, BackStepButton, Form } from "../styled-components/global.styled"
import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"
import gstyles from "../styles/global.module.css"
import styles from "../styles/DetailsForm.module.css"

type TFormValues = {
    insuranceType : string
    involvedUser : string
    orderDetails : string
}

export function DetailsForm() {
    const { onHandleNext, onHandleBack, setFormData, formData } = useFormState()
    const { register, handleSubmit } = useForm<TFormValues>({
        defaultValues: formData
    });

    function onHandleFormSubmit(data:any){
        setFormData((prevFormData) => ({...prevFormData, ...data}))
        onHandleNext()
    }

    return (
        <Form onSubmit={handleSubmit(onHandleFormSubmit)}>
            <div className={styles.DetailsFormDiv}>
                <div className={styles.DetailsFormDiv}>
                    <p>Tipo de Seguro</p>
                    <Select id="insuranceType" {...register("insuranceType")} required>
                        <Option value="" selected disabled hidden>Selecione</Option>
                        <Option value="S1">Opção de Seguro 1</Option>
                        <Option value="S2">Opção de Seguro 2</Option>
                        <Option value="S3">Opção de Seguro 3</Option>
                    </Select>
                </div>

                <div className={styles.DetailsFormDiv}>
                    <p>Selecione os usuários envolvidos</p>
                    <Select id="involvedUser" {...register("involvedUser")} required>
                        <Option value="" selected disabled hidden>Selecione</Option>
                        <Option value="U1">Opção de Usuário 1</Option>
                        <Option value="U2">Opção de Usuário 2</Option>
                        <Option value="U3">Opção de Usuário 3</Option>
                    </Select>
                </div>

                <div className={styles.DetailsFormDiv}>
                    <p>Adicione aqui os detalhes da ordem de serviço</p>
                    <TextArea id="orderDetails" {...register("orderDetails")} required></TextArea>
                </div>
            </div>

            <div className={gstyles.StepButtonsStyle}>
                <BackStepButton type="button" onClick={ onHandleBack }>Selecionar outro cliente</BackStepButton>
                <NextStepButton>Avançar para documentação</NextStepButton>
            </div>
        </Form>
    )
}