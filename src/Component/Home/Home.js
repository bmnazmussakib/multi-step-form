import React, { useState } from 'react';
import './Home.css';
import FormContainer from '../FormContainer/FormContainer';
import { createContext } from 'react';

export const stepContext = createContext();



const Home = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    return (
        <div className='home'>
            <stepContext.Provider value={{ currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData }} >
                <FormContainer />
            </stepContext.Provider>
        </div>
    );
};

export default Home;