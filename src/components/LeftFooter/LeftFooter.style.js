import styled from 'styled-components';

const LeftFooterWrapper = styled.section`
  background: #fff;
  width: 576px;
  border-radius: 8px;
  border: 1px #dfe0eb solid;
  padding: 30px;

  p,
  span {
    margin: 0;
  }

  .head {
    display: flex;
    justify-content: space-between;
  }

  .unresolved {
    h5 {
      font-size: 19px;
      font-weight: 500;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin-bottom: 0.5rem;
    }
  }
  .group-support {
    display: flex;
    font-size: 13px;
    p {
      color: var(--text-color);
      margin-right: 5px;
    }
    span {
      color: #4b506d;
    }
  }

  .foot {
    height: 91%;
    display: flex;
    flex-direction: column;
    /* margin-top: 1rem; */
    justify-content: end;

    .underline {
      height: 1px;
      width: 112%;
      margin-left: -30px;
      background: #dfe0eb;
    }
    .list {
      display: flex;
      justify-content: space-between;
      height: 3.5rem;
      align-items: center;
      p {
        font-size: 16px;
        color: #252733;
      }
      span {
        color: var(--text-color);
      }
    }
  }
`;

export default LeftFooterWrapper;
