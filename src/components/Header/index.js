import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import img from '../../images/backgroundImg.png';

export const HeaderStyled = styled.div`
  ${() => {
    return css`
      background-image: url(${img});
      width: 1200px;
      height: 140px;
      background-repeat: no-repeat;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background-position: center;

      .input-container {
        margin-top: 50px;
        width: 400px;
      }
    `;
  }}
`;

const Header = ({ handleOnDescChange }) => {
  const [keyword, setKeyword] = useState(null);

  return (
    <HeaderStyled>
      <div className="input-container">
        <input type="text" onChange={(e) => setKeyword(e.target.value)} />
        <button type="submit" onClick={() => handleOnDescChange(keyword)}>
          Search
        </button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
