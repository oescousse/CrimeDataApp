import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #DEB887; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #000766;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #000766;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export default Styles;