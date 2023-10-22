import { useFormState } from "./FormContext";
import styles from '../styles/stepIndicator.module.css'

export function StepIndicatorControl(props: { numberSteps: number; }){
    let StepIndicator = []

    const { step } = useFormState();

    for (let i = 1; i <= props.numberSteps; i ++){
        // Current step icon
        
        if (i < props.numberSteps && i == step){
            StepIndicator.push (
                <div className={styles.StepIndicatorBallDiv}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                        <circle cx="18.2483" cy="18.466" r="17.1077" stroke="#5828AC" stroke-width="2.28103"/>
                        <circle cx="18.2485" cy="18.466" r="5.70258" fill="#5828AC"/>
                    </svg>

                    <svg width="131" height="3" viewBox="0 0 131 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.496582" y="0.107758" width="130.503" height="2.28103" fill="#E2E0E5"/>
                    </svg>
                </div>
            )
        }else if (i == step){
            StepIndicator.push(
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                    <circle cx="18.2483" cy="18.466" r="17.1077" stroke="#5828AC" stroke-width="2.28103"/>
                    <circle cx="18.2485" cy="18.466" r="5.70258" fill="#5828AC"/>
                </svg>
            )
        }

        // Previous Step Icon

        if (i < props.numberSteps && i < step){
            StepIndicator.push (
                <div className={styles.StepIndicatorBallDiv}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18.2483" cy="18.2483" r="18.2483" fill="#5828AC"/>
                        <path d="M11.5957 19.1987L15.3974 23.0004L24.9017 13.4961" stroke="white" stroke-width="2.28103" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <svg width="131" height="3" viewBox="0 0 131 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.496582" y="0.107758" width="130.503" height="2.28103" fill="#5828AC"/>
                    </svg>
                </div>
            )
        }else if (i < step){
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18.2483" cy="18.2483" r="18.2483" fill="#5828AC"/>
                <path d="M11.5957 19.1987L15.3974 23.0004L24.9017 13.4961" stroke="white" stroke-width="2.28103" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        }

        // Later Step Icon

        if (i < props.numberSteps && i > step){
            StepIndicator.push (
                <div className={styles.StepIndicatorBallDiv}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                        <circle cx="18.2483" cy="18.466" r="17.1077" stroke="#C6C2CC" stroke-width="2.28103"/>
                        <circle cx="18.2482" cy="18.466" r="5.70258" fill="#E2E0E5"/>
                    </svg>

                    <svg width="131" height="3" viewBox="0 0 131 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.496582" y="0.107758" width="130.503" height="2.28103" fill="#E2E0E5"/>
                    </svg>
                </div>
            )
        }else if (i > step){
            StepIndicator.push (
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                    <circle cx="18.2483" cy="18.466" r="17.1077" stroke="#C6C2CC" stroke-width="2.28103"/>
                    <circle cx="18.2482" cy="18.466" r="5.70258" fill="#E2E0E5"/>
                </svg>
            )
        }
    }

    return(
        StepIndicator
    )
}