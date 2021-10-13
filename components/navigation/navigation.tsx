import styles from './Nav.module.css';
import { useState } from 'react';
import classNames from 'classnames';


export default function Navigation() {
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

  return <nav className={styles.navWrapper}>
    <div className={styles.socialLinkWrapper}>
      <button className={classNames(styles.twitterButton,styles.socialLinkButton)} onClick={twitterOnclickHandler}></button>
      <button className={classNames(styles.boatButton,styles.socialLinkButton)} onClick={boatOnclickHandler}></button>
      <button className={classNames(styles.discordButton,styles.socialLinkButton)} onClick={discordOnclickHandler}></button>
    </div>
    <div className={styles.navMenuWrapper}>
      <button className={styles.mintedButton} onClick={mintedOnclickHandler}>Minted: {minted}k</button>
      <button className={styles.connectButton} onClick={connectOnclickHandler}>Connect your wallet</button>
    </div>
  </nav>;
}
