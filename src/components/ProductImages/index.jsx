import React, { useState } from 'react';
import Wrapper from './styles';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <div className="main">
        <InnerImageZoom
          src={main.url}
          zoomSrc={main.url}
          zoomType="hover"          // same hover zoom behavior
          alt="main"
          className="zoom-image"
          hideHint={true}
          hasSpacer={true}
          zoomPreload={true}
        />
      </div>

      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              className={`${image.url === main.url ? 'active' : ''}`}
              key={index}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
