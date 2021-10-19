import React, { useEffect, useState } from 'react';
import style from './merchSection.module.css'

const MerchSection = () => {
  const [timer, setTimer] = useState(null)
  useEffect(() => {
    const deadline = 'December 31 2021'
    const getTimeRemaining = (deadline) => {
      //@ts-ignore
      const t = Date.parse(deadline) - Date.parse(new Date());
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total:
        t,
        days:
        days,
        hours:
        hours,
        minutes:
        minutes,
        seconds:
        seconds
      }
    }
    const interval = setInterval(() => {
      setTimer(getTimeRemaining(deadline))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={style.sectionWrapper}>
      <div className={style.test1}>
        <h2 className={style.sectionTitle}>Merch</h2>
        <div className={style.timeBordWrapper}>
          <div className={style.time}>{timer?.days}d : {timer?.hours}h : {timer?.minutes}m : {timer?.seconds}s</div>
        </div>
      </div>
      <ul className={style.sectionList}>
        <li className={style.sectionListItem}>
          <div className={style.merchOne}/>
        </li>
        <li className={style.sectionListItem}>
          <div className={style.merchTwo}/>
        </li>
        <li className={style.sectionListItem}>
          <div className={style.merchThree}/>
        </li>
      </ul>
    </div>
  );
};

export default MerchSection;
