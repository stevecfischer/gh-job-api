import React from 'react';
import JobItem from './JobItem/index';

// eslint-disable-next-line react/prop-types
const JobsList = ({ jobpositionData }) => {
  return (
    <div>
      {jobpositionData.map((item, index) => {
        return <JobItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default JobsList;
