import React from "react";
import Logo from "./Logo.png";

function Signup() {
  return (
    <div className="Signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form-container p-5 rounded bg-white">
      <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <form>
          <div className="mb-2">
          <div style={{ width: '100%', color: 'black', fontSize: '17px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>Business Name</div>
            <input type="text" placeholder="" className="form-control" />
          </div>

          <div className="mb-2" >
          <div style={{ width: '100%',  color: 'black', fontSize: '17px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>
            Business Lincense No.</div>
            <input type="tel" placeholder="" className="form-control"></input>
          </div>

          <div className="mb-2">
          <div style={{ width: '100%', color: 'black', fontSize: '17px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>
            Phone Number</div>
          <input type="tel"  placeholder="" className="form-control" />
          </div>

          <div className="mb-2">
          <div style={{ width: '100%', height: '100%', color: 'black', fontSize: '17px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>
            E-mail Address (optional)</div>
          <input type="email" placeholder="" className="form-control"></input>
          </div>

          <div className="mb-2">
          <div style={{ width: '100%', height: '100%', color: 'black', fontSize: '17px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>
            Password</div>
          <input type="password" id="password" placeholder="" className="form-control"></input>
          </div>
          <div className="mb-2">
          <div style={{ width: '100%', height: '100%', color: 'black', fontSize: '17px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>
            Repeat Password</div>
          <input type="password" id="password" placeholder="" className="form-control"></input>
          </div>

          <div className="d-grid">
          <div style={{ width: '100%', height: '100%', color: 'white', fontSize: '17px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>
            Sign Up</div>
          <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;