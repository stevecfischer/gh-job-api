import React from 'react';
import { JobItemStyled } from './JobItemStyled';

// eslint-disable-next-line react/prop-types
const JobItem = ({ item, setSelectedJobId }) => {
  // eslint-disable-next-line react/prop-types
  const { id, company, company_logo: companyLogo, title, type, location, created_at: createdAt } = item;
  return (
    <JobItemStyled>
      <div className="logo-container">
        <img src={companyLogo} alt={company} />
      </div>
      <div className="detail-container">
        <div className="company-name">{company}</div>
        <div className="job-title" onClick={() => setSelectedJobId(id)}>
          {title}
        </div>
        <div className="job-details-container">
          <div className="fulltime">{type}</div>
          <div className="job-meta-container">
            <div className="locations">{location}</div>
            <div className="date-posted">{createdAt}</div>
          </div>
        </div>
      </div>
    </JobItemStyled>
  );
};

export default JobItem;
