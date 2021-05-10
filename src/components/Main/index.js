import React from 'react';

import { MainStyled } from './MainStyled';
import JobsList from '../JobsList';

const Main = ({ searchResults }) => {
  return (
    <MainStyled>
      <div className="main-container">
        <JobsList searchResults={searchResults} />
      </div>
    </MainStyled>
  );
};

export default Main;
