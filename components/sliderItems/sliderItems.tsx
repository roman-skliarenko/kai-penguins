import React from 'react';
import style from './sliderItems.module.css';
import classNames from 'classnames';

const SliderItems = () => {
  return (
    <>
      {/*<li className={style.li}>*/}
      {/*  <div className={classNames(style.test, style.testOne)}/>*/}
      {/*</li>*/}
      <li className={style.li}>
        <div className={classNames(style.test, style.testTwo)}/>
      </li>
      <li className={style.li}>
        <div className={classNames(style.test, style.testThree)}/>
      </li>
      <li className={style.li}>
        <div className={classNames(style.test, style.testFour)}/>
      </li>
      <li className={style.li}>
        <div className={classNames(style.test, style.testFive)}/>
      </li>
      <li className={style.li}>
        <div className={classNames(style.test, style.testSix)}/>
      </li>
    </>
  );
};

export default SliderItems;
