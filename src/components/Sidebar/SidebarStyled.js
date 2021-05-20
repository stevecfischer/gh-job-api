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

      .how-to-apply-title {
        color: #b9bdcf;
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: bold;
      }

      .how-to-apply-link {
        font-size: 14px;
        color: #334680;
        line-height: 21px;
        overflow-wrap: anywhere;
      }

      .row {
        width: 100%;
      }

      .row--fulltime,
      .row--back-to-search {
        margin-bottom: 30px;
      }

      .location-radio {
        display: flex;
        flex-direction: column;
      }

      .location-radio-container {
        margin-bottom: 15px;
      }

      .location-input-container {
        height: 48px;
        background-color: #fff;
        border-radius: 6px;
        padding: 3px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
      }

      .row-location input.location-search {
        width: 380px;
        height: 48px;
        color: #b9bdcf;
        font-size: 12px;
      }

      .location-radio-inputs {
        margin-right: 10px;
      }

      .back-to-search {
        cursor: pointer;
        color: #1e86ff;
        font-size: 14px;
      }
    `;
  }}
`;
