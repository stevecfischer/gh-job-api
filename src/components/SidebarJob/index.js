import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import _ from 'lodash';
import { SidebarStyled } from '../Sidebar/SidebarStyled';

const SidebarJob = ({ selectedJob, setSelectedJobId }) => {
  const { how_to_apply: howToApply } = selectedJob[0];

  return (
    <SidebarStyled>
      <div className="sidebar-container sidebar-container--job">
        <div className="row row--fulltime">
          <div className="back-to-search" onClick={() => setSelectedJobId(null)}>
            Back to search
          </div>
        </div>
        <div className="row row-location">
          <div className="title">How to apply</div>
          <div className="how-to-apply" dangerouslySetInnerHTML={{ __html: howToApply }} />
        </div>
      </div>
    </SidebarStyled>
  );
};

export default SidebarJob;
