import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PublicSvg from '../../images/PublicIcon.svg';
import img from '../../images/backgroundImg.png';

export const HeaderStyled = styled.div`
  ${() => {
    return css`
      border-radius: 8px;
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
        height: 55px;
        width: 800px;
        background-color: #fff;
        border-radius: 6px;
        padding: 3px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      input {
        width: 500px;
        height: 40px;
        color: #b9bdcf;
        font-size: 12px;
        background-image: url(${PublicSvg});
      }

      button {
      }
    `;
  }}
`;

const Header = ({ handleOnDescChange, foo }) => {
  const [keyword, setKeyword] = useState(null);

  return (
    <HeaderStyled>
      <div className="input-container">
        <input
          placeholder="Title, companies, expertise or benefits"
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="button" style={{ color: foo }} onClick={() => handleOnDescChange(keyword)}>
          Search
        </button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
