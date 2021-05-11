import React, { useEffect, useState } from 'react';
import { getPositions } from './helpers/jobsAPI';
import Sidebar from './components/Sidebar';
import { AppStyled } from './AppStyled';
import jobpositionData from './jobpositionsData.json';
import { MainStyled } from './components/Main/MainStyled';
import JobsList from './components/JobsList';
import JobDetails from './components/JobDetails';

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const searchObj = {
      description: 'node',
      fullTime: false,
      // location: 'sf', // denver
    };

    const res = getPositions(searchObj).then((jobs) => {
      setSearchResults(jobs);
    });
  }, []);

  useEffect(() => {
    if (searchResults) {
      const job = searchResults.filter((item) => {
        return item.id === selectedJobId;
      });
      setSelectedJob(job);
    }
  }, [selectedJobId]);

  return (
    <AppStyled>
      <Sidebar />
      <MainStyled>
        <div className="main-container">
          {selectedJob && <JobDetails selectedJob={selectedJob} />}
          {searchResults && !selectedJobId && (
            <JobsList searchResults={searchResults} setSelectedJobId={setSelectedJobId} />
          )}
          {!selectedJobId && !searchResults && <div> loading </div>}
        </div>
      </MainStyled>
    </AppStyled>
  );
}

export default App;
