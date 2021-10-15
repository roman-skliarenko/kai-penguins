import React from 'react';
import style from './testSlider.module.css'
import SliderItems from '../sliderItems/sliderItems';

const TestSlider = () => {
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

export default TestSlider;
