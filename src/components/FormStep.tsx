import { DetailsForm } from "./DetailsForm";
import { useFormState } from "./FormContext";
import { ArchiveUploadForm } from "./ArchiveUploadForm";
import { BasicInfoForm } from "./BasicInfoForm";

export function FormStep(){
    const { step } = useFormState();

    switch(step){
        case 1: return <BasicInfoForm/>

        case 2: return <DetailsForm /> 

        case 3: return <ArchiveUploadForm />

        default: return null
    }
}