import React from 'react';
import style from './slider.module.css'
import SliderItems from './sliderItems/sliderItems';

const Slider = () => {
  return (
    <div>
      <section className={style.section}>
        <article className={style.article}>
          <div>
            <ul className={style.ul}>
             <SliderItems/>
            </ul>
          </div>
          <div>
            <ul className={style.ul}>
              <SliderItems/>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Slider;
