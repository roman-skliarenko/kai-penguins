import React from 'react';
import style from './Footer.module.css'
import styles from '../navigation/Nav.module.css';
import classNames from 'classnames';

const Footer = () => {
  const twitterOnclickHandler = () => {
    console.log('twitter button click')
    alert('twitter button click')
  }
  const discordOnclickHandler = () => {
    console.log('discord button click')
    alert('discord button click')
  }
  const boatOnclickHandler = () => {
    console.log('boat button click')
    alert('boat button click')
  }
  return (
    <div className={style.footerWrapper}>
      <p className={style.footerText}>Smart Contract</p>
      <div className={styles.socialLinkWrapper}>
        <button className={classNames(styles.twitterButton, styles.socialLinkButton)}
          onClick={twitterOnclickHandler}></button>
        <button className={classNames(styles.boatButton, styles.socialLinkButton)}
          onClick={boatOnclickHandler}></button>
        <button className={classNames(styles.discordButton, styles.socialLinkButton)}
          onClick={discordOnclickHandler}></button>
      </div>
    </div>
  );
};

export default Footer;
