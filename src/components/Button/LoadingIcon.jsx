import {keyframes} from 'styled-components'

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;



function Icon() {
  return (
    <>
    <div className='loading' style={rotateAnimation}></div>
    </>
  );
}

export default Icon;
