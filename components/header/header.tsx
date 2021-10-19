import style from './header.module.css';
import buttonStyle from '../../styles/buttonsStyle.module.css';
import navLinkStyle from '../../styles/socialLink.module.css';
import { useState } from 'react';
import classNames from 'classnames';


export default function Header() {
  const [minted, setMinted] = useState(1.2)
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
  const mintedOnclickHandler = () => {
    console.log('minted button click')
    alert('minted button click')
  }
  const connectOnclickHandler = () => {
    console.log('connect button click')
    alert('connect button click')
  }

  return <nav className={style.navWrapper}>
    <div className={style.socialLinkWrapper}>
      <button className={classNames(navLinkStyle.twitterButton, navLinkStyle.socialLinkButton)}
        onClick={twitterOnclickHandler}/>
      <button className={classNames(navLinkStyle.boatButton, navLinkStyle.socialLinkButton)}
        onClick={boatOnclickHandler}/>
      <button className={classNames(navLinkStyle.discordButton, navLinkStyle.socialLinkButton)}
        onClick={discordOnclickHandler}/>
    </div>
    <div className={style.navBtnMenuWrapper}>
      <button className={buttonStyle.mintedButton} onClick={mintedOnclickHandler}>Minted: {minted}k</button>
      <button className={buttonStyle.connectButton} onClick={connectOnclickHandler}>Connect your wallet</button>
    </div>
  </nav>;
}
