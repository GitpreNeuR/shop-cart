import React, { useState } from 'react';
import Wrapper from './styles';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  const handleOnError = () => {
    setHasError(true);
    console.log(setHasError);
  };

  if (hasError) {
    return (
      <Wrapper className='page-100'>
        <h1>Something went wrong</h1>
      </Wrapper>
    );
  }

  return (
    <div onError={handleOnError}>
      {props.children}
    </div>
  );
}

export default ErrorBoundary;
