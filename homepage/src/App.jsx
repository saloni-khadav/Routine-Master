import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
 import Progress1 from './component/progres/Progress1';

import Progress from './component/progres/Progress';
import Navcll from './component/navccal/navcll';
import Hmpge from './component/Homepage/hmpge';
import Task from './component/Homepage/hmpge';
import Goal from './component/Goal';
import Welcomepage from './component/welcomepage/Welcomepage';



function App() {
         const domain="dev-r50wu5d3c4x5xbho.us.auth0.com";
         const clientId= "8GmQbOZ6YKsSfbViw7bg05T0BRG7QRTA";
  
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
         
    <Router>
       <div className="App">
        
         
        <Routes>
          <Route path="/" element={<Welcomepage></Welcomepage>}></Route>
          <Route path="/Hmpge" element={<Hmpge></Hmpge>}></Route>
          <Route path="/Progress" element={<Progress></Progress>}></Route>
          <Route path="/Progress1" element={<Progress1></Progress1>}></Route>
          <Route path="/Goal" element={<Goal></Goal>}></Route>
        
        </Routes>
         
    </div>
    </Router>
    </Auth0Provider>
  );
}

export default App;



