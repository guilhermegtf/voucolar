import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/index.jsx';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
