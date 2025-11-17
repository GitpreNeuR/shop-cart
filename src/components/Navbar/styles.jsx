import styled from 'styled-components';

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  position:sticky;
  z-index:20;
  top:0;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #a67ec9, #9566b9, #854da8, #753498, #651587);
  
  .nav-center {
    width: 95vw;
    margin: 0 auto;
    
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width:180px;
      
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-white);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-primary-10);
        font-size: 1rem;
        font-weight:500;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-10);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default NavContainer;
