import React from 'react';

import styled, { css } from 'styled-components';

export const JobDetailsStyled = styled.div`
  ${() => {
    return css`
      .row {
        width: 100%;
      }

      .row--title {
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
      }

      .row--created-at {
        margin-bottom: 32px;
      }

      .row--meta {
        margin-bottom: 32px;
        display: flex;
        flex-direction: row;
      }

      .title {
        font-size: 24px;
        margin-bottom: 10px;
        margin-right: 20px;
      }

      .fulltime {
        width: 55px;
        margin-right: auto;
        font-size: 12px;
        color: #334680;
        border: 1px solid #334680;
        box-sizing: border-box;
        border-radius: 4px;
      }

      .created-at {
        font-size: 12px;
        color: #b7bcce;
      }

      .logo {
        margin-right: 16px;
        display: flex;
        align-items: center;
      }

      .logo img {
        width: 90px;
        height: auto;
        border-radius: 4px;
      }

      .company {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .location {
        font-size: 12px;
        color: #b9bdcf;
      }

      .description {
      }
    `;
  }}
`;

const JobDetails = ({ selectedJob }) => {
  const {
    id,
    company,
    company_logo: companyLogo,
    title,
    type,
    location,
    description,
    created_at: createdAt,
  } = selectedJob[0];
  return (
    <JobDetailsStyled>
      <div className="row row--title">
        <div className="title">{title}</div>
        <div className="fulltime">{type}</div>
      </div>
      <div className="row row--created-at created-at">{createdAt}</div>
      <div className="row row--meta">
        <div className="logo">
          <img src={companyLogo} alt={company} />
        </div>
        <div className="row row--company-location">
          <div className="company">{company}</div>
          <div className="location">{location}</div>
        </div>
      </div>
      <div className="row row--description">
        <div className="desc" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </JobDetailsStyled>
  );
};

export default JobDetails;
