import React, { useContext } from 'react';
import { stepContext } from '../Home/Home';
import './Stepper.css';
import completed from '../../image/Group 4.svg';

const Stepper = () => {

    const { currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData } = useContext(stepContext);

    const activeStepNumber = {
        fontFamily: "Inter",
        fontSize: '30px',
        fontWeight: 700,
        lineHeight: '36px',
        color: '#989898',
        marginRight: '20px',
    }

    const inactiveStepNumber = {
        fontFamily: "Inter",
        fontSize: '30px',
        fontWeight: 700,
        lineHeight: '36px',
        color: '#989898',
        opacity: 0.3,
        marginRight: '20px',
    }

    const activeStepName = {
        fontFamily: "Inter",
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '17px',
        color: '#000000',
        opacity: 1,
    }

    return (
        <div className='stepper'>
            <div className="step-list d-flex justify-content-around">
                <div className="step-item first-step-item d-flex align-items-center">
                    {
                        currentStep > 1 ? <img src={completed} className='me-2' /> : <span className='active-step-number'>1</span>
                    }

                    <span className='active-step-name'>Your Feedback</span>
                </div>

                <div className="step-item second-step-item d-flex align-items-center">
                    {
                        currentStep > 2 ? <img src={completed} className='me-2' /> : <span className={`${currentStep > 1 ? 'active-step-number' : 'inactive-step-number'}`}>2</span>
                    }

                    <span className={`${currentStep > 1 ? 'active-step-name' : 'inactive-step-name'}`}>Your Information</span>
                </div>

                <div className="step-item last-step-item d-flex align-items-center">
                    {/* {
                        currentStep === 3 ? <img src={completed} className='me-2' /> : <span className='step-number'>3</span>
                    } */}
                    <span className={`${currentStep > 2 ? 'active-step-number' : 'inactive-step-number'}`}>3</span>
                    <span className={`${currentStep > 2 ? 'active-step-name' : 'inactive-step-name'}`}>Confirmation</span>
                </div>
            </div>
        </div>
    );
};

export default Stepper;