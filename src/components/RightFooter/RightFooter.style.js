import styled from 'styled-components';

const RightFooterWrapper = styled.section`
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
      color: #c5c7cd;
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

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          color: #c5c7cd;
        }
      }

      p {
        font-size: 16px;
        color: #252733;
      }
      .soft {
        color: #c5c7cd;
      }
      span {
        color: var(--text-color);
        svg {
          font-size: 1.5rem;
          color: #c5c7cd;
        }
      }
      .checked {
        font-size: 1.2rem;
        color: #3751ff;
      }
    }

    .button {
      height: 1.7rem;
      text-align: center;
      color: #fff;
      border-radius: 8px;
      text-transform: uppercase;
      border: none;
      padding: 5px 15px 5px 15px;
    }
    .yellow {
      background: #fec400;
    }
    .green {
      background: #29cc97;
    }
    .default {
      color: #9fa2b4;
    }
  }
`;

export default RightFooterWrapper;
