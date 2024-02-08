import React, {useState} from 'react'

const SavingsPage = () => {
    const [savingAmount, setSavingAmount] = useState('');
    const [savingPeriod, setSavingPeriod] = useState('');

    const handlesave = () =>{
        console.log('Saving amount:', savingAmount);
        console.log('Saving period:', savingPeriod)
    };
  return (
    <div className='savings-page'>
      <h2>Savings</h2>
      <div>
        <input type='text' placeholder='Enter Savings Amount' value={savingAmount} onChange={(e) => setSavingAmount(e.target.value)} />
        <input type='text' placeholder='Enter saving period(months' value={savingPeriod} onChange={(e) => setSavingPeriod(e.target.value)}/>
        <p>Your daily pay is $10</p>
        <button onClick={handlesave}>Save</button>
      </div>
    </div>
  )
}

export default SavingsPage;

