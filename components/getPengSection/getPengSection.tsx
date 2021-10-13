import React, { useState } from 'react';
import style from './GetPengSection.module.css'
import styles from '../navigation/Nav.module.css';
import classNames from 'classnames';

const GetPengSection = () => {
  const [amount, setAmount] = useState(10)
  const incrementOnclickHandler = () => {
    setAmount(amount + 1)
  }
  const decrementOnclickHandler = () => {
    setAmount(amount - 1)

  }
  const mintedOnclickHandler = () => {
    console.log('minted button click')
    alert('minted button click')
  }
  const connectOnclickHandler = () => {
    console.log('connect button click')
    alert('connect button click')
  }
  let minted = 1.2
  return (
    <div className={style.getPengSectionWrapper}>
      <h2 className={style.getPengBlockTitle}>Get Your Penguin</h2>
      <div className={style.getPengBlock}>
        <div className={style.getBlockImg}></div>
        <div className={style.getBlockActionWrapper}>
          <div className={style.getBlockAccount}>
            <span className={style.getBlockActionTitle}>ACCOUNT</span>
            <span className={style.getBlockActionContent}>Please Connect MetaMask</span>
          </div>
          <div className={style.getBlockAmount}>
            <span className={style.getBlockActionTitle}>AMOUNT</span>
            <button className={classNames(style.decrementButton, style.amountButton)}
              onClick={decrementOnclickHandler}></button>
            <span className={style.getBlockAmountCount}>{amount}</span>
            <button className={classNames(style.incrementButton, style.amountButton)}
              onClick={incrementOnclickHandler}></button>
          </div>
          <div className={style.getBlockPrice}>
            <span className={style.getBlockActionTitle}>TOTAL PRICE</span>
            <span className={style.getBlockPriceContent}>0.059</span>
            <span> &nbsp;ETH</span>
          </div>
          <div className={style.getBlockButton}>
            <button className={styles.mintedButton} onClick={mintedOnclickHandler}>Minted: {minted}k</button>
            <button className={styles.connectButton} onClick={connectOnclickHandler}>Connect your wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPengSection;
