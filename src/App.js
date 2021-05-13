import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
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
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const searchObj = {
      description: searchDesc,
      fullTime: searchFT,
      location: searchLoc, // denver
      pageNumber,
    };

    const res = getPositions(searchObj).then((jobs) => {
      setSearchResults(jobs);
    });
  }, [searchLoc, searchFT, searchDesc, pageNumber]);

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
    setSearchFT(!searchFT);
  };

  const handleOnLocRadioChange = (e) => {
    setSearchLoc(e.target.value);
  };

  const handleOnDescChange = (keyword) => {
    setSearchDesc(keyword);
  };

  const handleOnLocInputChange = (locstring) => {
    setSearchLoc(locstring);
  };

  const handleOnClickPage = (selectedPage) => {
    if (selectedPage === pageNumber) return;
    setPageNumber(selectedPage);
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
      <footer>
        <Pagination pageNumber={pageNumber} handleOnClickPage={handleOnClickPage} />
      </footer>
    </AppStyled>
  );
}

export default App;
