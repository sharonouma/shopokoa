import React, { useState } from 'react';
import './SavingsPage.css';


const SavingsPage = () => {
    const [savingAmount, setSavingAmount] = useState('');
    const [savingPeriod, setSavingPeriod] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSave = () => {
        if (!savingAmount || !savingPeriod) {
            setErrorMessage('Please enter both savings amount and period.');
            return;
        }

        console.log('Saving amount:', savingAmount);
        console.log('Saving period:', savingPeriod);
        setErrorMessage('');
    };

    const calculateDailyPay = () => {
        if (!savingAmount || !savingPeriod) return '';

        const totalAmount = parseFloat(savingAmount);
        const months = parseFloat(savingPeriod);
        const dailyPay = totalAmount / (months * 30);
        return dailyPay.toFixed(2);
    };

    return (
        <div className='savings-page'>
            <div className='savings-form'>
                <div className="input-section">
                    <label htmlFor="savingAmount">Savings Amount:</label>
                    <input
                        type='text'
                        id="savingAmount"
                        placeholder='Enter Savings Amount'
                        value={savingAmount}
                        onChange={(e) => setSavingAmount(e.target.value)}
                        className="input-field"
                    />
                </div>
                <div className="input-section">
                    <label htmlFor="savingPeriod">Saving Period (months):</label>
                    <input
                        type='text'
                        id="savingPeriod"
                        placeholder='Enter saving period (months)'
                        value={savingPeriod}
                        onChange={(e) => setSavingPeriod(e.target.value)}
                        className="input-field"
                    />
                </div>
                <div className="savings-summary">
                    <p>Your daily pay should be: ${calculateDailyPay()}</p>
                </div>
                <button onClick={handleSave} className="save-btn">Save</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    );
}

export default SavingsPage;
