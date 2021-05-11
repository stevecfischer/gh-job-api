import React from 'react';
import JobItem from './JobItem/index';

// eslint-disable-next-line react/prop-types
const JobsList = ({ searchResults, setSelectedJobId }) => {
  return (
    <>
      {searchResults &&
        searchResults.map((item, index) => {
          return <JobItem setSelectedJobId={setSelectedJobId} item={item} key={item.id} />;
        })}
    </>
  );
};

export default JobsList;
