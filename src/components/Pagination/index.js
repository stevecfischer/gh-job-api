import React from 'react';

import styled, { css } from 'styled-components';

export const PaginationStyled = styled.div`
  ${() => {
    return css`
      display: flex;
      align-items: center;
      flex-direction: row;
      align-content: center;

      .box {
        width: 36px;
        padding: 10px;
        border: 1px solid #b7bcce;
        box-sizing: border-box;
        border-radius: 4px;
        margin-right: 10px;
        text-align: center;
      }
    `;
  }}
`;

const Pagination = ({ handleOnClickPage, pageNumber }) => {
  let disableBack = false;
  if (pageNumber <= 1) {
    disableBack = true;
  }

  return (
    <PaginationStyled>
      <button
        disabled={disableBack}
        type="button"
        className="left-arrow box"
        onClick={() => handleOnClickPage(pageNumber - 1)}
      >
        {'<'}
      </button>
      <button type="button" className="box" onClick={() => handleOnClickPage(1)}>
        1
      </button>
      <button type="button" className="box" onClick={() => handleOnClickPage(2)}>
        2
      </button>
      <button type="button" className="box" onClick={() => handleOnClickPage(3)}>
        3
      </button>
      <button type="button" className="right-arrow box" onClick={() => handleOnClickPage(pageNumber + 1)}>
        {'>'}
      </button>
    </PaginationStyled>
  );
};

export default Pagination;
