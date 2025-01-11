

import React from 'react';
 import './Welcomepage.css';
// import './index.css';
import { useAuth0 } from '@auth0/auth0-react';

function  Welcomepage() {
  const{user,loginWithRedirect,isAuthenticated,logout}=useAuth0();
  console.log("current user",user);
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">My Daily Routine</h1>
        <p className="subtitle">Organize your day, one task at a time</p>
      </header>

      <main className="main">
        <div className="card">
          <h2 className="card-title">Morning</h2>
          <p className="card-description">Start your day with energy</p>
          {/* <button className="card-button">Get Started</button> */}
          <img src="morning.jpg" alt="Logo" className="logo" />

        </div>

        <div className="card">
          <h2 className="card-title">Afternoon</h2>
          <p className="card-description">Keep up the momentum</p>
          {/* <button className="card-button">Get Started</button> */}
          <img src="morning.jpg" alt="Logo" className="logo" />
        </div>

        <div className="card">
          <h2 className="card-title">Evening</h2>
          <p className="card-description">Wind down and relax</p>
          {/* <button className="card-button">Get Started</button> */}
           <img src="morning.jpg" alt="Logo" className="logo" />
        </div>
        <div className="contain">
        <p>“ You don't have to be great to start, but you have to start to be great.”</p>
        {isAuthenticated && <h3>hello {user.name}</h3>}
        {isAuthenticated ?(
          <button onClick={e=>logout()} className='contain-button'>Logout</button>
        ) : (
          <button onClick={e=>loginWithRedirect()} className='contain-button'>Login</button>
        )
      
      }
       
        </div>
      </main>
    </div>
  );
}

export default  Welcomepage;
