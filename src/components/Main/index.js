import React from 'react';

import { MainStyled } from '~/components/Main/MainStyled';
import JobsList from '~/components/JobsList';

const Main = ({ jobpositionData }) => {
  return (
    <MainStyled>
      <JobsList jobpositionData={jobpositionData} />
    </MainStyled>
  );
};

export default Main;
