import React from 'react';

import { MainStyled } from '~/components/Main/MainStyled';
import JobsList from '~/components/JobsList';

const Main = ({ searchResults }) => {
  return (
    <MainStyled>
      <JobsList searchResults={searchResults} />
    </MainStyled>
  );
};

export default Main;
