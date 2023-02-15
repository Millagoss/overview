import styled from 'styled-components';

const NavbarWrapper = styled.section`
  background: #363740;
  width: 255px;
  color: #dde2ff;
  height: 1300px;

  .logo {
    width: 80%;
    margin: 0 auto;
    color: #a4a6b3;
    font-size: 1.3rem;

    span {
      border-radius: 60%;
      background: #3751ff;
      padding: 2px 7px 2px 7px;
      width: 3rem;
      margin-right: 10px;
      font-weight: 900;
      color: white;
    }
  }

  .links-container {
    width: 100%;
    margin: 0 auto;
    margin-top: 41px;
    height: 608px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  .main-links {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px var(--grey-400) solid;
  }
  .active {
    background: rgba(255, 255, 255, 0.2);
    border-left: 4px #dde2ff solid;
    color: white;
  }
`;

export default NavbarWrapper;
