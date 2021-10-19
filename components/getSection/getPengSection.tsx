import React, { useState } from 'react';
import style from './getSection.module.css'
import buttonStyle from '../../styles/buttonsStyle.module.css'
import buttonsStyle from '../../styles/buttonsStyle.module.css'
import classNames from 'classnames';

const GetPenguinSection = () => {
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
    <div className={style.sectionWrapper}>
      <h2 className={style.sectionTitle}>Get Your Penguin</h2>
      <div className={style.contentWrapper}>
        <div className={style.getSectionImg}/>
        <div className={style.subjectWrapper}>
          <div className={style.accountWrapper}>
            <span className={style.subjectTitle}>ACCOUNT</span>
            <span className={style.subjectText}>Please Connect MetaMask</span>
          </div>
          <div className={style.amountWrapper}>
            <span className={style.subjectTitle}>AMOUNT</span>
            <div className={style.amountButtonWrapper}>
              <button className={classNames(buttonStyle.decrementButton, buttonStyle.amountButton)}
                onClick={decrementOnclickHandler}/>
              <span className={style.amountCount}>{amount}</span>
              <button className={classNames(buttonStyle.incrementButton, buttonStyle.amountButton)}
                onClick={incrementOnclickHandler}/>
            </div>

          </div>
          <div className={style.priceWrapper}>
            <span className={style.subjectTitle}>TOTAL PRICE</span>
            <div className={style.priceTextWrapper}>
              <span className={style.subjectText}>0.059</span>
              <span className={style.eth}> &nbsp;ETH</span>
            </div>
          </div>
          <div className={style.sectionButtons}>
            <button className={buttonsStyle.mintedButton} onClick={mintedOnclickHandler}>Minted: {minted}k</button>
            <button className={buttonsStyle.connectButton} onClick={connectOnclickHandler}>Connect your wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPenguinSection;
