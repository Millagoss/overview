import styled from 'styled-components';

const OverviewWrapper = styled.section`
  width: calc(100% - 295px);
  margin-right: 40px;

  display: flex;
  flex-direction: column;
  row-gap: 35px;

  header {
    display: flex;
    margin-top: 41px;
    justify-content: space-between;
    margin-bottom: 2rem;

    h4 {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 600;
      font-size: 24px;
      color: #252733;
    }
  }
  .contact-and-search {
    display: flex;
    width: 220px;
    justify-content: space-between;

    .search {
      width: 5rem;
      padding-right: 20px;
      display: flex;
      justify-content: space-between;
      color: var(--text-color);
      align-items: center;
      font-size: 1.1rem;
      border-right: 1px var(--text-color) solid;
    }

    .contact {
      display: flex;
      align-items: center;
      column-gap: 10px;
      p {
        margin: 0;
        color: #252733;
      }
      svg {
        font-size: 2rem;
        color: #252733;
      }
    }
  }
  .box-container {
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;

    .box {
      display: flex;
      flex-direction: column;
      width: 258px;
      height: 134px;
      background: #fff;
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      border: 1px #dfe0eb solid;
      p {
        margin: 0.5rem;
        color: var(--text-color);
      }
      span {
        font-size: 40px;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #252733;
      }
      .active-para {
        color: blue;
      }
    }
  }
`;

export default OverviewWrapper;
