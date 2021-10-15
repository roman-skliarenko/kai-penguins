import style from '../styles/home.module.css'
import Navigation from '../components/navigation/navigation'
import InfoSection from '../components/infoSection/infoSection';
import MerchSection from '../components/merchSection/merchSection';
import Footer from '../components/footer/footer';
import GetPengSection from '../components/getPengSection/getPengSection';
import FaqSection from '../components/faqSection/faqSection';
import Slider from '../components/testSlider/testSlider';
import TestAccordion from '../components/testAccordion/testAccordion';

export default function Home() {
  return (
    <div className={style.container}>
      <header>
        <Navigation/>
      </header>
      <main>
        <div className={style.topBg}>
          <Slider/>
          <InfoSection/>
        </div>
        <MerchSection/>
        <div className={style.bottomBg}>
          <GetPengSection/>
          <TestAccordion/>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
