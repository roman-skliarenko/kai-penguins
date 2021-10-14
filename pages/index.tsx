import style from '../styles/home.module.css'
import SimpleSlider from '../components/slider/slider';
import Navigation from '../components/navigation/navigation'
import InfoSection from '../components/infoSection/infoSection';
import MerchSection from '../components/merchSection/merchSection';
import Footer from '../components/footer/footer';
import GetPengSection from '../components/getPengSection/getPengSection';
import FaqSection from '../components/faqSection/faqSection';
import Slider from '../components/testSlider/testSlider';

export default function Home() {
  return (
    <div className={style.container}>
      <header>
          <Navigation/>
      </header>
      <Slider/>
      <main>
        <div className={style.topBg}>
          {/*<SimpleSlider/>*/}
          <InfoSection/>
        </div>
        <MerchSection/>
        <div className={style.bottomBg}>
          <GetPengSection/>
          <FaqSection/>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
