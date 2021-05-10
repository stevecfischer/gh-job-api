import React, { useEffect, useState } from 'react';
import { getPositions } from './helpers/jobsAPI';
import Sidebar from './components/Sidebar';
import { AppStyled } from './AppStyled';
import Main from './components/Main';
import jobpositionData from './jobpositionsData.json';

function App() {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    const searchObj = {
      description: 'python',
      fullTime: true,
      location: '28210',
    };

    const res = getPositions(searchObj).then((jobs) => {
      setSearchResults(jobs);
    });
  }, []);

  return (
    <AppStyled>
      <Sidebar />
      {searchResults ? <Main searchResults={searchResults} /> : <div>hang on!</div>}
    </AppStyled>
  );
}

export default App;
