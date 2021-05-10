import React, { useEffect, useState } from 'react';
import { getPositions } from './helpers/jobsAPI';
import Sidebar from './components/Sidebar';
import { AppStyled } from './AppStyled';
import Main from './components/Main';
import jobpositionData from './jobpositionsData.json';

function App() {
  // @scftodo getting cors errors locally
  // useEffect(() => {
  //   const searchObj = {
  //     description: 'python',
  //     fullTime: true,
  //     location: 'sf',
  //   };
  //
  //   const results = getPositions(searchObj);
  // }, []);

  return (
    <AppStyled>
      <Sidebar />
      <Main jobpositionData={jobpositionData} />
    </AppStyled>
  );
}

export default App;
