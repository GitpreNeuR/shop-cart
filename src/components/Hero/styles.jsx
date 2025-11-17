import styled from 'styled-components';



export const HeroBanner = styled.div`
  padding: 40px 0;
  position: relative;
  background-image: linear-gradient(to right, #a67ec9, #9566b9, #854da8, #753498, #651587);

  @media (min-width: 768px) {
    height: calc(100vh - 80px);
  }

  .content {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column-reverse;
    max-width: calc(100% - 20px);
    margin: 0 auto;
    position: relative;
    

    @media (min-width: 768px) {
      flex-direction: row;
      max-width: 1200px;
    }

    .banner-img {
      position: relative;
      z-index: 9;
      width: 190px;
      margin-bottom: 20px;

      @media (min-width: 768px) {
        width: 500px;
        margin-right: 60px;
        margin-top: 50px;
        margin-bottom: 0;
      }

      @media (min-width: 1440px) {
        width: 600px;
        margin-right: 0;
        margin-top: 0;
      }
    }

    .text-content {
      color: var(--clr-grey-7);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 768px) {
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
      }

      @media (min-width: 1440px) {
        left: 0;
      }

      h1 {
        font-size: 80px;
        font-weight: 700;
        line-height: 1;
        color: var(--clr-primary-2);
        margin-bottom: 20px;

        @media (min-width: 768px) {
          font-size: 180px;
        }
      }

      p {
        max-width: 300px;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 20px;

        @media (min-width: 768px) {
          max-width: 500px;
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 40px;
        }
      }

      .ctas {
        display: flex;
        justify-content: center;
        gap: 20px;

        .banner-cta {
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 500;
          width: fit-content;
          color:var(--clr-primary-1);
          border: 2px solid var(--clr-primary-3);
          padding: 10px 20px;
          transition: all ease 0.3s;
          cursor: pointer;

          &.v2 {
            background-color: var(--clr-primary-3);
            color: var(--clr-grey-8);
          }

          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  }
`;


