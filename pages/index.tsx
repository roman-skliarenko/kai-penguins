import style from '../styles/Home.module.css'
import SimpleSlider from '../components/slider/slider';
import Navigation from '../components/navigation/navigation'
import InfoSection from '../components/infoSection/infoSection';
import MerchSection from '../components/merchSection/merchSection';
import Footer from '../components/footer/footer';
import GetPengSection from '../components/getPengSection/getPengSection';
import FaqSection from '../components/faqSection/faqSection';

export default function Home() {
  return (
    <div className={style.container}>
      <Navigation/>
      <main >
        <SimpleSlider/>
        <InfoSection/>
        <MerchSection/>
        <GetPengSection/>
        <FaqSection/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
