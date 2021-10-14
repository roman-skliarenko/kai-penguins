import React from 'react';
import style from './testSlider.module.css'
import Image from 'next/image';

const TestSlider = () => {
  const images = [
    {
      src: '/img/peng-one.png',
    },
    {
      src: '/img/peng-two.png',
    },
    {
      src: '/img/peng-three.png',
    },
    {
      src: '/img/peng-four.png',
    },
    {
      src: '/img/peng-five.png',
    },]
  return (
    <div>
      <section className={style.section}>
        <article className={style.article}>
          <div>
            <ul className={style.ul}>
              {images.map((image, index) => (
                <li className={style.li} key={index}>
                  <Image
                    src={images[index].src}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </li>))}
            </ul>
          </div>
          <div>
            <ul className={style.ul}>
              {images.map((image, index) => (
                <li className={style.li} key={index}>
                  <Image
                    src={images[index].src}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </li>))}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

export default TestSlider;
