import React, { useEffect, useState } from 'react';
import SidebarJob from './components/SidebarJob';
import Header from './components/Header';
import { getPositions } from './helpers/jobsAPI';
import Sidebar from './components/Sidebar';
import { AppStyled } from './AppStyled';
import { MainStyled } from './components/Main/MainStyled';
import JobsList from './components/JobsList';
import JobDetails from './components/JobDetails';

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [locationRadio, setLocationRadio] = useState(null);
  const [isFullTime, setIsFullTime] = useState(null);
  const [searchDesc, setSearchDesc] = useState('');
  const [searchFT, setSearchFT] = useState(false);
  const [searchLoc, setSearchLoc] = useState('');

  useEffect(() => {
    const searchObj = {
      description: searchDesc,
      fullTime: searchFT,
      location: searchLoc, // denver
    };

    const res = getPositions(searchObj).then((jobs) => {
      setSearchResults(jobs);
    });
  }, [searchLoc, searchFT, searchDesc]);

  useEffect(() => {
    if (searchResults && selectedJobId !== null) {
      const job = searchResults.filter((item) => {
        return item.id === selectedJobId;
      });
      setSelectedJob(job);
    } else {
      setSelectedJob(null);
    }
  }, [selectedJobId]);

  const handleOnFullTimeChange = (value) => {
    console.log(value, 'handleOnFullTimeChange');
    setSearchFT(!searchFT);
  };

  const handleOnLocRadioChange = (e) => {
    console.log(e.target.value, 'handleOnFullTimeChange');
    setSearchLoc(e.target.value);
  };

  const handleOnDescChange = (keyword) => {
    console.log(keyword, 'keyword');
    setSearchDesc(keyword);
  };

  const handleOnLocInputChange = (locstring) => {
    console.log(locstring, 'locstring');
    setSearchLoc(locstring);
  };

  return (
    <AppStyled>
      <Header handleOnDescChange={handleOnDescChange} />
      <div className="container">
        {!selectedJob && (
          <Sidebar
            searchFT={searchFT}
            handleOnFullTimeChange={handleOnFullTimeChange}
            handleOnLocRadioChange={handleOnLocRadioChange}
            handleOnLocInputChange={handleOnLocInputChange}
            setSelectedJobId={setSelectedJobId}
          />
        )}
        {selectedJob && <SidebarJob setSelectedJobId={setSelectedJobId} selectedJob={selectedJob} />}
        <MainStyled>
          <div className="main-container">
            {selectedJob && <JobDetails selectedJob={selectedJob} />}
            {searchResults && !selectedJobId && (
              <JobsList searchResults={searchResults} setSelectedJobId={setSelectedJobId} />
            )}
            {!selectedJobId && !searchResults && <div> loading </div>}
          </div>
        </MainStyled>
      </div>
    </AppStyled>
  );
}

export default App;
