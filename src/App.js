import React from 'react';
import { Layout } from './Layout';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './Pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages.Home />} />
      </Route>
    </Routes>
  );
}

export default App;
