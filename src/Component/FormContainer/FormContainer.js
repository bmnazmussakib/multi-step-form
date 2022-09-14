import React, { useContext } from 'react';
import './FormContainer.css';
import FirstStep from '../FirstStep/FirstStep';
import SecondStep from '../SecondStep/SecondStep';
import ThirdStep from '../ThirdStep/ThirdStep';
import Stepper from '../Stepper/Stepper';
import { useState } from 'react';
import { stepContext } from '../Home/Home';

const FormContainer = () => {

    const { currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData } = useContext(stepContext);

    const showStep = (step) => {
        switch (step) {
            case 1:
                return <FirstStep />
            case 2:
                return <SecondStep />
            case 3:
                return <ThirdStep />
        }
    }

    // const [step, setStep] = useState(3);

    return (
        <div className='form-container'>
            <Stepper />
            <div className="form-body">
                {/* <FirstStep /> */}
                {/* <SecondStep /> */}
                {/* <ThirdStep /> */}

                {/* {
                    step === 1 ? <FirstStep /> : step === 2 ? <SecondStep /> : <ThirdStep />
                } */}

                {
                    showStep(currentStep)
                }
            </div>
        </div>
    );
};

export default FormContainer;