import { StepIndicatorBox }  from '../styled-components/StepIndicator.styled'
import styles from '../app/global.module.css'
import { useFormState } from "./FormContext";

export function StepIndicator(){
    const { step } = useFormState();
    const stepsForm = ["Informações Básicas", "Detalhes", "Envio de Arquivos"]

    return (
        <StepIndicatorBox>
            <div className={styles.StepIndicatorTextDiv} >
                {stepsForm?.map((stepForm, i) => (
                    <div key={i}>
                        <p className={styles.StepIndicatorText}>{stepForm}</p>
                        
                        
                    </div>
                    
                ))}
            </div>
        </StepIndicatorBox>
    )
}