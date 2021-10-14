import React from 'react';
import style from './Footer.module.css'
import socialLinkStyle from '../../styles/socialLink.module.css';
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
      <p className={style.smartContract}>Smart Contract</p>
      <div className={socialLinkStyle.socialLinkWrapper}>
        <button className={classNames(socialLinkStyle.twitterButton, socialLinkStyle.socialLinkButton)}
          onClick={twitterOnclickHandler}/>
        <button className={classNames(socialLinkStyle.boatButton, socialLinkStyle.socialLinkButton)}
          onClick={boatOnclickHandler}/>
        <button className={classNames(socialLinkStyle.discordButton, socialLinkStyle.socialLinkButton)}
          onClick={discordOnclickHandler}/>
      </div>
    </div>
  );
};

export default Footer;
