"use client"

import { MainBox } from "../styled-components/Page.styled"
import { StepIndicator } from "@/components/StepIndicator";
import { FormProvider } from "@/components/FormContext";
import { FormStep } from "@/components/FormStep";

export default function Home() {
  return (
    <MainBox>
        <FormProvider>
          <StepIndicator />
          <FormStep />
        </FormProvider>
    </MainBox>
  )
}
