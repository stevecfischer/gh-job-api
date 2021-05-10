import styled, { css } from 'styled-components';

export const MainStyled = styled.div`
  ${() => {
    return css`
      padding-top: 40px;
      width: 66%;
      flex-basis: 0;
      flex-grow: 999;
      display: flex;
      flex-direction: column;
      align-items: center;

      .main-container {
        width: 80%;
        margin: 0 auto;
      }
    `;
  }}
`;
