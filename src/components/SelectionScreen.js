import React from 'react';
import logo from './Logo.png'; 

const Selection = () => {
  const onButtonClick = (buttonType) => {
    console.log('${buttonType} button clicked');

  };

  return (
    <div className={"mainContainer"}>
      <div className={"logoContainer"}>
        <img src={logo} alt="Logo" style={{ width: '300px', height: '150px' }} />
      </div>
      <div className={"buttonContainer"}>
        <input
          className="inputButton1"
          type="button"
          onClick={() => onButtonClick('Personal Use')}
          value={"Personal Use"} 
        />    
      </div>
      <div className={"buttonContainer"}>
        <input
          className="inputButton1"
          type="button"
          onClick={() => onButtonClick('Business')}
          value={"Business"} 
        />    
      </div>
    </div>
  );
};

export default Selection;