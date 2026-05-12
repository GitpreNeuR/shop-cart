import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;

  div {
    width: 100%;
    max-width: 400px;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .form-control {
      width: 100%;
      margin-bottom: 1.25rem;

      h5 {
        margin-bottom: 0.5rem;
      }
    }

    .input {
      width: 100%;
      padding: 0.75rem 1rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border: 1px solid transparent;
      letter-spacing: var(--spacing);
      font-size: 0.95rem;
      transition: var(--transition);
    }

    .input:focus {
      border-color: var(--clr-primary-5);
      background: var(--clr-white);
    }

    .input::placeholder {
      text-transform: capitalize;
    }

   .password {
  width: 100%;
  display: flex;
  align-items: center;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  overflow: hidden;

  .input {
    flex: 1;
    background: transparent;
    border: none;
  }
}

.togglebtn {
  width: 50px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;

  cursor: pointer;
  color: var(--clr-grey-4);

  svg {
    font-size: 1.1rem;
  }
}
    .links {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .link {
      font-size: 0.85rem;
      color: var(--clr-primary-1);
      text-transform: capitalize;
      transition: var(--transition);
    }

    .link:hover {
      color: var(--clr-primary-5);
    }

    .seperator {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 1.5rem;

      span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 0.5rem;
        background: var(--clr-white);
        color: var(--clr-grey-5);
        font-size: 0.85rem;
      }

      hr {
        width: 100%;
      }
    }

    .login-btn {
      margin-top: 1.25rem;
      width: 100%;
      padding: 0.75rem 1rem;
    }

    .social-login-btn {
      margin-top: 1rem;
      width: 100%;
      min-height: 48px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;

      padding: 0.75rem 1rem;

      color: var(--clr-primary-5);
      background: transparent;
      border: 2px solid var(--clr-primary-5);
      border-radius: var(--radius);

      cursor: pointer;
      transition: var(--transition);

     

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 1.5rem 1rem;

    .links {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default Wrapper;