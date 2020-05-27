import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CreateGlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <CreateGlobalStyle />
    </>
  );
};

export default App;
