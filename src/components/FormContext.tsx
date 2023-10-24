import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface TFormData{
    clientName: string
    clientCNPJ: string
    insuranceType : string
    involvedUser : string
    orderDetails : string
}

interface IFormContext{
    onHandleNext: () => void
    onHandleBack: () => void
    step: number
    formData: TFormData
    setFormData: Dispatch<SetStateAction<TFormData>>
}

const FormContext = createContext<IFormContext>({
    onHandleBack: () => {},
    onHandleNext: () => {},
    step: 1,
    formData: {
        clientName: "",
        clientCNPJ: "",
        insuranceType: "",
        involvedUser: "",
        orderDetails: "",
    },
    setFormData: () => {},
})

interface IProps{
    children: ReactNode
}

export function FormProvider({children}:IProps){
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<TFormData>({
        clientName: "",
        clientCNPJ: "",
        insuranceType: "",
        involvedUser: "",
        orderDetails: "",
    })

    function onHandleNext(){
        setStep((prevValue) => prevValue + 1)
    }

    function onHandleBack(){
        setStep((prevValue) => prevValue - 1)
    }

    return (
        <FormContext.Provider value={{ onHandleBack, onHandleNext, step, formData, setFormData }}>
            {children}
        </FormContext.Provider>
    )
}

export function useFormState(){
    return useContext(FormContext);
}