import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import bannerImg from '../../assets/banner-img.png'

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Shop Cart | About';
  }, []);

  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
      <img src={bannerImg} alt='pic' />
        <article>
          <div className='title'>
            <h2>My Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum voluptatibus praesentium, eos voluptate eaque libero sint perferendis explicabo corporis quia ducimus distinctio, autem ipsa quos rerum ullam magnam molestiae blanditiis aliquid vel consequuntur? Explicabo magnam officiis totam, cupiditate hic repudiandae tempora repellat repellendus veniam velit dignissimos perspiciatis fugit sed ea, reiciendis quaerat ratione? Quod minima illum fuga veritatis quasi odio alias ipsum nobis cum voluptates totam officiis, sequi, delectus eius a repellendus animi ducimus eligendi iure enim expedita. Officiis!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
