import React from 'react';
import styled,{keyframes} from 'styled-components'

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const Loader = styled.div`
  width: 48px;
  height: 48px;
  background: #353535;
  display: block;
  margin: 20px auto;
  position: relative;
  box-sizing: border-box;
  animation: ${rotateAnimation} 1s ease-in-out infinite reverse;

  &::before {
    content: '';
    box-sizing: border-box;
    left: 0;
    top: 0;
    transform: rotate(45deg);
    position: absolute;
    width: 48px;
    height: 48px;
    background: #2e2e2e;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  &::after {
    content: '';
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    background: rgb(0, 0, 0);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
`;

function Icon() {
  return (
    <>
    <div className='loading'></div>
    </>
  );
}

export default Icon;
