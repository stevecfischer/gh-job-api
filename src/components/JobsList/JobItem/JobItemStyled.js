import styled, { css } from 'styled-components';

export const JobItemStyled = styled.div`
  ${() => {
    return css`
      width: 790px;
      background: #ffffff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      margin-bottom: 30px;
      padding: 12px;

      .logo-container {
        margin-right: 16px;
        display: flex;
        align-items: center;
      }

      .logo-container img {
        width: 90px;
        height: auto;
        border-radius: 4px;
      }

      .detail-container {
        width: 100%;
      }

      .company-name {
        font-family: Roboto;
        font-weight: bold;
        font-size: 12px;
        color: #334680;
        margin-bottom: 8px;
      }

      .job-title {
        font-size: 18px;
        color: #334680;
        margin-bottom: 12px;
        cursor: pointer;
      }

      .job-details-container {
        display: flex;
        flex-direction: row;
        width: 100%;
      }

      .fulltime {
        width: 61px;
        margin-right: auto;
        font-size: 12px;
        color: #334680;
        border: 1px solid #334680;
        box-sizing: border-box;
        border-radius: 4px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
      }

      .job-meta-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 300px;
      }

      .locations {
        font-size: 12px;
        color: #b9bdcf;
      }

      .date-posted {
        font-size: 12px;
        /* identical to box height */

        color: #b9bdcf;
      }
    `;
  }}
`;
