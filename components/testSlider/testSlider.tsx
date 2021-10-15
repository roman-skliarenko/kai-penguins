import React from 'react';
import style from './testSlider.module.css'
import Image from 'next/image';
import { images } from '../../constants/sliderImg';

const TestSlider = () => {
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
