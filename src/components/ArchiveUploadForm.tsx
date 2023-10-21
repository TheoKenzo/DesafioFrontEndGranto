"use client"

import styles from "../app/global.module.css"
import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"
import { useState } from "react"
import { BackStepButton, Form, NextStepButton } from '@/styled-components/global.styled'
import { InputFile } from '@/styled-components/ArchiveUploadForm.styled'

type TFormValues = {
    // Adicionar Arquivos
}

export function ArchiveUploadForm() {
    const [ isCreated, setCreated ] = useState(false)
    const { onHandleBack, setFormData, formData } = useFormState()
    const { register, handleSubmit } = useForm<TFormValues>({
        /*defaultValues: formData*/
    });

    function onHandleFormSubmit(data:any){
        setFormData((prevFormData) => ({...prevFormData, ...data}))
        setCreated(true)
    }

    return isCreated ? (
        <div>
            <h1>Formulário Salvo com Sucesso</h1>
            <pre>{JSON.stringify(formData)}</pre>
        </div>
    ) : (
        <Form onSubmit={handleSubmit(onHandleFormSubmit)}>
            <div className={styles.ArchiveUploadForm}>
                <div className={styles.ArchiveUploadFormDiv}>
                    <p>Escolha aqui os arquivos que você deseja adicionar</p>

                    <input type="file" id="file" placeholder="file" className={styles.ArchiveUploadFormInputFile} /*{...register("")}*/ multiple required />
                    <InputFile htmlFor="file">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
                            <path d="M40.2286 32.7298C39.5387 33.579 38.2801 33.7165 37.4177 33.0375L34.0003 30.3463V39.375C34.0003 40.4623 33.1049 41.3438 32.0003 41.3438C30.8958 41.3438 30.0003 40.4623 30.0003 39.375V30.3461L26.583 33.0375C25.7205 33.7165 24.4619 33.579 23.7718 32.7298C23.0818 31.8809 23.2217 30.6419 24.0842 29.9625L30.7438 24.7183C31.083 24.4482 31.5139 24.2851 31.9835 24.2813C31.9891 24.2813 31.9947 24.2812 32.0003 24.2812H32.0067C32.4843 24.2827 32.9227 24.449 33.2657 24.7254L39.9163 29.9625C40.7787 30.6419 40.9187 31.8809 40.2286 32.7298Z" fill="#C6C2CC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3467 18.8843C24.9114 14.9618 29.388 12.3593 34.4851 12.3593C42.1664 12.3593 48.4456 18.2694 48.8856 25.7221C49.0547 25.7151 49.2245 25.7115 49.3955 25.7115C55.9896 25.7115 61.3355 30.9737 61.3355 37.465C61.3355 43.9564 55.9896 49.2188 49.3955 49.2188H18.3323C9.67923 49.2188 2.66455 42.3137 2.66455 33.7958C2.66455 25.278 9.67923 18.3729 18.3323 18.3729C19.7181 18.3729 21.064 18.5505 22.3467 18.8843ZM34.4851 16.2968C30.3509 16.2968 26.7749 18.6654 25.0883 22.1081C24.6349 23.0337 23.5345 23.4603 22.5616 23.0876C21.253 22.5864 19.8278 22.3104 18.3323 22.3104C11.8884 22.3104 6.66456 27.4525 6.66456 33.7958C6.66456 40.1391 11.8884 45.2812 18.3323 45.2812H49.3955C53.7805 45.2812 57.3355 41.7819 57.3355 37.465C57.3355 33.1485 53.7805 29.6491 49.3955 29.6491C48.6819 29.6491 47.9933 29.7412 47.3397 29.9129C46.6992 30.0814 46.0155 29.9263 45.5144 29.4992C45.0131 29.0719 44.7597 28.4277 44.8376 27.7796C44.8856 27.3801 44.9104 26.9729 44.9104 26.5592C44.9104 20.8914 40.2427 16.2968 34.4851 16.2968Z" fill="#C6C2CC"/>
                        </svg>
                        <p>Envie aqui suas documentações</p>
                        <p className={styles.ArchiveUploadFormText}>PDF, Word, Excel, outros arquivos</p>

                        <div className={styles.ArchiveUploadFormButton}>
                            <p className={styles.ArchiveUploadFormButtonText}>Selecionar Arquivo</p>
                        </div>
                    </InputFile>
                </div>

                <div className={styles.ArchiveUploadFormDiv}>
                    <p>Arquivos selecionados</p>

                    <div id="selectedArchives"></div>
                </div>
            </div>

            <div>
                <BackStepButton type="button" onClick={ onHandleBack }>Alterar detalhes</BackStepButton>
                <NextStepButton>Salvar formulário</NextStepButton>
            </div>
        </Form>
    )
}