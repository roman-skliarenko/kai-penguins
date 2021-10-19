import style from '../styles/home.module.css'
import Header from '../components/header/header'
import InfoSection from '../components/infoSection/infoSection';
import MerchSection from '../components/merchSection/merchSection';
import Footer from '../components/footer/footer';
import GetSection from '../components/getSection/getPengSection';
import FaqSection from '../components/faqSection/faqSection';
import Slider from '../components/slider/slider';
import { useEffect } from 'react';

export default function Home() {
  useEffect(()=>{

  },[])
  return (
    <div className={style.container}>
      <header>
        <Header/>
      </header>
      <main>
        <div className={style.topBg}>
          <Slider/>
          <InfoSection/>
        </div>
        <MerchSection/>
        <div className={style.bottomBg}>
          <GetSection/>
          <FaqSection/>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
