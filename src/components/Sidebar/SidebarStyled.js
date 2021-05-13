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

      .sidebar-container--job {
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
      }

      .how-to-apply {
        overflow-wrap: anywhere;
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
