import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { stepContext } from '../Home/Home';
import './FirstStep.css';




const FirstStep = () => {

    const { currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData } = useContext(stepContext);

    const [bad, setBad] = useState(true);
    const [okay, setOkay] = useState(true);
    const [good, setGood] = useState(true);


    // useEffect((data)=>{
    //     if(data == bad){
    //         setUserData({day: bad})
    //     }
    //     if(data == okay){
    //         setUserData({day: okay})
    //     }
    //     if(data == good){
    //         setUserData({day: good})
    //     }

    //     console.log(userData);
    // },[data])



    // console.log("bad: ", bad)
    // console.log("okay: ", okay)
    // console.log("good: ", good)


    const handleChange = (data) => {
        if (data === 'bad') {
            if (bad === true) {
                console.log(data)
            }
            setBad(!bad)
        }
        if (data === 'okay') {
            if (okay === true) {
                console.log(data)
            }
            setOkay(!okay)

        }
        if (data === 'good') {
            if (good === true) {
                console.log(data)
            }
            setGood(!good)
        }
    }

    return (
        <div>
            <div className='question-wrapper question-wrapper-1'>
                <h3 className='question'>01. How was your day?</h3>
                {/* className={`${!focused?'btn first-step-btn':'btn first-step-btn-focus'}`} */}
                <div className='answer-wrapper'>
                    <button type="button" value={bad} onClick={() => { handleChange('bad') }} className={`${bad ? 'btn first-step-btn' : 'btn first-step-btn-focus'}`}>Bad</button>
                    <button type="button" value={okay} onClick={() => { handleChange('okay') }} className={`${okay ? 'btn first-step-btn' : 'btn first-step-btn-focus'}`}>Okay</button>
                    <button type="button" value={good} onClick={() => { handleChange('good') }} className={`${good ? 'btn first-step-btn' : 'btn first-step-btn-focus'}`}>Good</button>
                </div>
            </div>
            <div className='question-wrapper question-wrapper-2'>
                <h3 className='question'>02. Do you feel you are making difference?</h3>
                <div className='check-list d-flex answer-wrapper'>
                    <div className='check-item'>
                        <input type="checkbox" name="" id="yes" className='checkbox' />
                        <label htmlFor="yes" className='label'>Yes</label>
                    </div>
                    <div className='check-item'>
                        <input type="checkbox" className='checkbox' name="" id="no" />
                        <label htmlFor="no" className='label'>No</label>
                    </div>
                </div>
            </div>
            <div className='next-btn-wrapper d-flex justify-content-end'>
                <button type="button" onClick={() => { setCurrentStep(2) }} class="btn next-btn">Next</button>
            </div>
        </div>
    );
};

export default FirstStep;