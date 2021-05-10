import styled, { css } from 'styled-components';

export const SidebarStyled = styled.div`
  ${() => {
    return css`
      flex-basis: 33%;
      flex-grow: 1;
    `;
  }}
`;
