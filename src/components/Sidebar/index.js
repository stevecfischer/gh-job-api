import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import { SidebarStyled } from './SidebarStyled';

const Sidebar = ({ handleOnLocInputChange, handleOnLocRadioChange, handleOnFullTimeChange, searchFT }) => {
  const [userQuery, setUserQuery] = useState('');

  const updateQuery = () => {
    // A search query api call.
    console.log(userQuery, 'userquery');
    handleOnLocInputChange(userQuery);
  };

  const delayedQuery = useCallback(_.debounce(updateQuery, 1000), [userQuery]);

  const onChange = (e) => {
    setUserQuery(e.target.value);
  };

  useEffect(() => {
    if (userQuery === '') return;
    delayedQuery();

    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel;
  }, [userQuery, delayedQuery]);

  return (
    <SidebarStyled>
      <div className="sidebar-container">
        <div className="row row--fulltime">
          <input type="checkbox" name="fulltime" checked={searchFT} onChange={() => handleOnFullTimeChange(searchFT)} />{' '}
          <span>Full Time</span>
        </div>
        <div className="row row-location">
          <div className="title">Location</div>
          <input
            className="location-search"
            placeholder="Utica, Denver, SF, 13057"
            onChange={onChange}
            value={userQuery}
          />
          <div className="location-radio" onChange={(e) => handleOnLocRadioChange(e)}>
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
