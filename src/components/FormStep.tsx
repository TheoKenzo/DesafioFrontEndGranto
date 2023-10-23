import { DetailsForm } from "./DetailsForm";
import { useFormState } from "./FormContext";
import { ArchiveUploadForm } from "./ArchiveUploadForm";
import { BasicInfoForm } from "./BasicInfoForm";

export function FormStep(){
    const { step } = useFormState();
    
    return(
        <div>
            {step == 1 && <BasicInfoForm/>}
            {step == 2 && <DetailsForm />}
            {step == 3 && <ArchiveUploadForm />}
        </div>
    )
}