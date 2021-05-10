import React from 'react';
import JobItem from './JobItem/index';

// eslint-disable-next-line react/prop-types
const JobsList = ({ searchResults }) => {
  return (
    <>
      {searchResults &&
        searchResults.map((item, index) => {
          return <JobItem item={item} key={item.id} />;
        })}
    </>
  );
};

export default JobsList;
