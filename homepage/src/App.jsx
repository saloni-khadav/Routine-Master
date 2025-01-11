import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Progress1 from './component/progres/Progress1';
import Progress from './component/progres/Progress';
import Hmpge from './component/Homepage/hmpge';
import Goal from './component/goall/Goal';
import Welcomepage from './component/welcomepage/Welcomepage';

function App() {
  const domain = "dev-r50wu5d3c4x5xbho.us.auth0.com";
  const clientId = "8GmQbOZ6YKsSfbViw7bg05T0BRG7QRTA";
  const redirectUri = window.location.origin || "http://localhost:5173"; // Ensure a fallback for development

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Welcomepage />} />
            <Route path="/Hmpge" element={<Hmpge />} />
            <Route path="/Progress" element={<Progress />} />
            <Route path="/Progress1" element={<Progress1 />} />
            <Route path="/Goal" element={<Goal />} />
          </Routes>
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
