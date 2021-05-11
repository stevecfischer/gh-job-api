import React from 'react';

import styled, { css } from 'styled-components';

export const SidebarStyled = styled.div`
  ${() => {
    return css`
      padding-top: 40px;
      flex-basis: 33%;
      flex-grow: 1;

      .sidebar-container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
      }

      .row {
        width: 100%;
      }

      .row--fulltime {
        margin-bottom: 30px;
      }

      .title {
        color: #b9bdcf;
        margin-bottom: 15px;
      }

      .location-search {
        margin-bottom: 25px;
      }

      .location-radio {
        display: flex;
        flex-direction: column;
      }

      .location-radio-container {
        margin-bottom: 15px;
      }
    `;
  }}
`;

const Sidebar = ({ handleOnLocationOptionChange, handleOnFullTimeChange, isFullTime }) => {
  console.log(isFullTime, 'isFullTime');

  return (
    <SidebarStyled>
      <div className="sidebar-container">
        <div className="row row--fulltime">
          <input
            type="checkbox"
            name="fulltime"
            checked={isFullTime}
            onChange={() => handleOnFullTimeChange(isFullTime)}
          />{' '}
          <span>Full Time</span>
        </div>
        <div className="row row-location">
          <div className="title">Location</div>
          <input className="location-search" placeholder="City, State, zipcode.." />
          <div className="location-radio" onChange={(e) => handleOnLocationOptionChange(e)}>
            <div className="location-radio-container">
              <input type="radio" value="denver" name="city" /> Denver
            </div>
            <div className="location-radio-container">
              <input type="radio" value="sf" name="city" /> San Francisco
            </div>
          </div>
        </div>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
