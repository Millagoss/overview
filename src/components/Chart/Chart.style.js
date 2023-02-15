import styled from 'styled-components';

const ChartWrapper = styled.section`
  background: #fff;
  height: 546px;
  border-radius: 8px;
  display: flex;
  /* grid-template-columns: 2fr 0.1fr 1fr; */
  justify-content: space-between;
  padding: 20px;
  gap: 0px;
  border: 1px #dfe0eb solid;
  .chart-container {
    width: 75%;
    padding-right: 30px;
  }
  .line {
    height: 108%;

    width: 1px;
    background: #dfe0eb;
    margin: 0;
    margin-top: -20px;
  }
  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    .todays-trend {
      h5 {
        margin: 0;
        font-size: 19px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        text-transform: none;
        letter-spacing: 0;
      }
      span {
        margin: 0;
        font-size: 12px;
        color: #9fa2b4;
      }
    }

    .info {
      display: flex;
      align-items: flex-end;
      width: 12rem;
      font-size: 12px;
      justify-content: end;
      gap: 20px;

      div {
        display: flex;
        color: #9fa2b4;
        align-items: center;
        gap: 5px;
        .blue {
          height: 1px;
          width: 20px;
          background: #3751ff;
        }

        .grey {
          height: 1px;
          width: 20px;
          background: #dfe0eb;
        }
      }
    }
  }

  aside {
    /* border-left: 1px #dfe0eb solid; */
    display: flex;
    width: 25%;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    .underline {
      height: 1px;
      width: 106%;
      background: #dfe0eb;
    }
    .box {
      height: 6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        margin: 0;
        font-size: 16px;
        color: #9fa2b4;
      }
      span {
        margin: 0;
        color: #252733;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        font-size: 24px;
      }
    }
  }
`;

export default ChartWrapper;
