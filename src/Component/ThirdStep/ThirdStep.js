import React from 'react';
import './ThirdStep.css';
import './ThirdStep.css';
import thanks from '../../image/XMLID_26_.png';

const ThirdStep = () => {
    return (
        <div className='third-step'>
            <div className='text-center'>
                <img src={thanks} alt="" className='img-fluid'/>
                <h4 className='thanks-text'>Thanks for your feedback!</h4>
            </div>
        </div>
    );
};

export default ThirdStep;