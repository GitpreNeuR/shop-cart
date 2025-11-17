import React from 'react';
import Wrapper from './styles';
import { socialLinks, footerLinks } from "../../utils/constants";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <Wrapper>
      <div className="footerSocialLinks">
        {socialLinks.map((link) => {
          const { icon, text } = link;
          return (
            <div key={text}>
              <a href="/" target='_blank'>{icon}</a>
            </div>
          );
        })}
      </div>
      <div className="footerLinks">
        {footerLinks.map((link) => {
          const {  text, id } = link;
          return (
            <div key={id}>
              {id === 4 ? <a href='/'>{text}</a>
                :
                <Link to="/">{text}</Link>
              }
            </div>
          );
        })}
      </div>
      <div className='underline'>
      </div>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Shop Cart </span>
        - All Rights Reserved
      </h5>
    </Wrapper>
  );
};

export default Footer;
