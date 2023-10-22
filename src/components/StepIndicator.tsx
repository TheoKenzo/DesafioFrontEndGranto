import { StepIndicatorBox }  from '../styled-components/StepIndicator.styled'
import styles from '../styles/stepIndicator.module.css'
import { StepIndicatorControl } from "./StepIndicatorControl"

export function StepIndicator(){
    const stepsForm = ["Informações Básicas", "Detalhes", "Envio de Arquivos"]

    return(
        <StepIndicatorBox>
            <div className={styles.StepIndicatorDiv} >
                <div className={styles.StepIndicatorTextDiv}>
                    {stepsForm?.map((stepForm, i) => (
                        <div key={i}>
                            <p className={styles.StepIndicatorText}>{stepForm}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.StepIndicatorBallDiv}>
                    <StepIndicatorControl  numberSteps={stepsForm.length}/>
                </div>
            </div>
        </StepIndicatorBox>
    )
}
