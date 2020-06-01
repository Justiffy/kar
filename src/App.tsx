import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { ApiContext } from './api/useApi';
import { HkApi } from "./api/hkApi";
import {Root} from './components/Root';

const api = new HkApi({ url: "https://2ch.hk" });

const App: React.FC = () => {
  return (
    <ApiContext.Provider value={api}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default App;