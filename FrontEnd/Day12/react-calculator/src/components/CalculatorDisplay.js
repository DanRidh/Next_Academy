import React from 'react';

const CalculatorDisplay = ({displayResult}) => {
    return (
        <div style={{border: "1px solid black"}}>
            <div style={{width: "100%"}}>
                <h1 style={{textAlign: "end"}}>
                    {displayResult()}
                </h1>
            </div>
        </div>
    );
};

export default CalculatorDisplay;