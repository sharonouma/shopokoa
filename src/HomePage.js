import React from "react";
import { useNavigate } from "react-router-dom";
import logo from './assets/Logo.png';

const Home = (props) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();

    const onButtonClick = () => {
        if (loggedIn) {
            
        } else {
            navigate('/login');
        }
    };

    const onFlexiSaveClick = () => {
        navigate('/flexisave');
    };

    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <div className="TextGradient">Welcome our Champion!</div>
                <img src={logo} alt="Logo" style={{ width: '700px', height: '300px' }} />
            </div>

            <div className="buttonContainer">
                <input
                    className="inputButton"
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? "Log out" : "Log in"}
                />
                
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <p>Shop with FlexiSave! The best there has ever been! </p>
                        <input
                            className="inputButton2"
                            type="button"
                            onClick={onFlexiSaveClick}
                            value="FlexiSave"
                        />
                    </div>
        
                {loggedIn && <div>Email address is {email}</div>}
            </div>
        </div>
    );
};

export default Home;

