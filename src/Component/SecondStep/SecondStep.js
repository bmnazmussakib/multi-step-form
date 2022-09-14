import React, { useContext } from 'react';
import { stepContext } from '../Home/Home';
import './Second.css';

const SecondStep = () => {

    const { currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData } = useContext(stepContext);

    return (
        <div>
            <div>
                <div className='question-wrapper question-wrapper-1'>
                    <h3 className='question'>01. Your Name</h3>
                    <div class="second-form-input-wrapper answer-wrapper">
                        <input type="text" class="form-control second-form-input" id="" placeholder="John Doe"/>
                    </div>
                </div>
                <div className='question-wrapper question-wrapper-2'>
                    <h3 className='question'>02. Your Email</h3>
                    <div class="second-form-input-wrapper answer-wrapper">
                        <input type="email" class="form-control second-form-input" id="" placeholder="john@gmail.com"/>
                    </div>
                </div>
                <div className='next-btn-wrapper d-flex justify-content-end'>
                    <button type="button" onClick={()=>{setCurrentStep(1)}} class="btn back-btn">Back</button>
                    <button type="button" onClick={()=>{setCurrentStep(3)}} class="btn next-btn submit-btn">Submit</button>
                </div>
            </div>

        </div>
    );
};

export default SecondStep;