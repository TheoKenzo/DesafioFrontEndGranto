import { SelectedArchivesDiv, SelectedArchivesDivData, SelectedArchivesSelect } from "@/styled-components/ArchiveUploadForm.styled";
import styles from "../styles/ArchiveUploadForm.module.css"
import React, { useState, useEffect } from 'react';
import { useFormState } from "./FormContext"

function SelectedArchivesItem(props: { name: string; dataFormatada: string; divider: boolean, onRemove: () => void }) {
    return (
        <div>
            <SelectedArchivesDiv>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M13.5 25.5V22.5M18 25.5V19.5M22.5 25.5V16.5M25.5 31.5H10.5C9.70435 31.5 8.94129 31.1839 8.37868 30.6213C7.81607 30.0587 7.5 29.2956 7.5 28.5V7.5C7.5 6.70435 7.81607 5.94129 8.37868 5.37868C8.94129 4.81607 9.70435 4.5 10.5 4.5H18.879C19.2768 4.50008 19.6583 4.65818 19.9395 4.9395L28.0605 13.0605C28.3418 13.3417 28.4999 13.7232 28.5 14.121V28.5C28.5 29.2956 28.1839 30.0587 27.6213 30.6213C27.0587 31.1839 26.2956 31.5 25.5 31.5Z" stroke="#423D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div className={styles.SelectedArchivesMainDiv}>
                    <p className={styles.SelectedArchivesFileNameText}>{props.name}</p>

                    <div className={styles.SelectedArchivesDiv}>
                        <SelectedArchivesDivData>
                            <p className={styles.SelectedArchivesFileDataText}>Anexado: {props.dataFormatada}</p>
                            <p className={styles.SelectedArchivesFileDataText}>Enviado por: Daniella Barbosa</p>
                        </SelectedArchivesDivData>

                        <SelectedArchivesDivData>
                            <p className={styles.SelectedArchivesFileTypeText}>Selecione o tipo de arquivo</p>

                        <div className={styles.SelectedArchivesSelect}>
                            <SelectedArchivesSelect name="archiveType" required>
                                <option value="" selected disabled hidden>Selecionar</option>
                                <option value="A1">Tipo de Arquivo 1</option>
                                <option value="A2">Tipo de Arquivo 2</option>
                                <option value="A3">Tipo de Arquivo 3</option>
                            </SelectedArchivesSelect>

                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                <path d="M9.5 5L6 8.5L2.5 5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        </SelectedArchivesDivData>
                    </div>
                </div>

                <button type="button" className={styles.SelectedArchivesButton} onClick={props.onRemove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14.74 9L14.394 18M9.606 18L9.26 9M19.228 5.79C19.57 5.842 19.91 5.897 20.25 5.956M19.228 5.79L18.16 19.673C18.1164 20.2382 17.8611 20.7662 17.445 21.1512C17.029 21.5363 16.4829 21.7502 15.916 21.75H8.084C7.5171 21.7502 6.97102 21.5363 6.55498 21.1512C6.13894 20.7662 5.88359 20.2382 5.84 19.673L4.772 5.79M19.228 5.79C18.0739 5.61552 16.9138 5.4831 15.75 5.393M4.772 5.79C4.43 5.841 4.09 5.896 3.75 5.955M4.772 5.79C5.92613 5.61552 7.08623 5.4831 8.25 5.393M15.75 5.393V4.477C15.75 3.297 14.84 2.313 13.66 2.276C12.5536 2.24064 11.4464 2.24064 10.34 2.276C9.16 2.313 8.25 3.298 8.25 4.477V5.393M15.75 5.393C13.2537 5.20008 10.7463 5.20008 8.25 5.393" stroke="#A39DAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </SelectedArchivesDiv>

            {props.divider && <FileDivider />}
        </div>
    )
}

function FileDivider() {
    return (
        <svg width="407" height="1" viewBox="0 0 407 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="407" height="1" fill="#EEEDF0" />
        </svg>
    );
}

export function SelectedArchives() {
    const [ newFileList, setNewFileList ] = useState<Array<File>>([])
    const { formData, setFormData } = useFormState()

    const data = new Date();

    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;

    function HandleUpload(fileList: Array<File>) {
        setFormData((prevFormData) => ({ ...prevFormData, archives: fileList }))
    }

    const removeFile = (indexToRemove: number) => {
        setNewFileList((prevFileList: Array<File>) => {
            const newList = [...prevFileList];
            newList.splice(indexToRemove, 1);
            return newList;
        });
    };

    useEffect(() => {
        const archiveInput = document.querySelector("#file") as HTMLInputElement;

        const handleChange = () => {
            if (archiveInput.files) {
                setNewFileList(prev => {
                    let fileList = prev || [];
                    fileList = [...fileList, ...Array.from(archiveInput.files || [])]
                    HandleUpload(fileList)
                    return fileList
                });
            }
        };

        archiveInput?.addEventListener("change", handleChange, false);

        return () => {
            archiveInput?.removeEventListener("change", handleChange);
        };
    }, []);

    return (
        <div>
            {newFileList.map((file, index) => (<SelectedArchivesItem key={index} name={file.name} dataFormatada={dataFormatada} divider={index < (newFileList.length - 1)} onRemove={() => removeFile(index)} />))}
        </div>
    )
}