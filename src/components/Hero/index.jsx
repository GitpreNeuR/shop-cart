import {HeroBanner} from './styles';
import { Link } from 'react-router-dom';

import bannerImg from '../../assets/banner-img.png'
const Hero = () => {
  return (
    <HeroBanner>
       <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    Convallis interdum purus adipiscing dis parturient
                    posuere ac a quam a eleifend montes parturient posuere
                    curae tempor
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <Link to="/products" className="banner-cta v2">Shop Now</Link>
                </div>
            </div>
<img className="banner-img" alt="Sales banner" src={bannerImg} />
        </div>
    </HeroBanner>
  );
};

export default Hero;


