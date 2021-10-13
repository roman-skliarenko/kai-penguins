import style from './infoSection.module.css';

export default function InfoSection() {
  return <div className={style.infoSectionWrapper}>
    <div className={style.leftSideWrapper}>
      <h1 className={style.infoSectionTitle}>Kai Penguins</h1>
      <p className={style.infoSectionText}>Kai Penguins is a collection of unique penguins NFTs - digital
        collectibles living on the Ethereum
        blockchain. They prefer to chill on the ice and celebrate their sacred holiday - Vingi. But their
        predators have different plans. Your Kai Penguin has to prepare for the upcoming attack and mobilize his
        strength to overcome the enemies.</p>
      <p className={style.infoSectionSpan}>Start your collection and adventure with Kai Penguins.</p>
      <h2 className={style.infoSectionSubTitle}>Metaverse</h2>
      <p className={style.infoSectionSubText}>The Vingi is approaching - one of the most important and
        sacred holidays of all penguins. On this day,
        penguins from different parts of the world gather in one place to join the celebration. However, predators
        like leopard seals, sharks, and killer whales will not miss this chance to hunt on the penguins and try to
        destroy the beloved festival.</p>
      <p className={style.infoSectionText}> Luckily, the penguins found out about the approaching attack
        from their enemies and organized a squad to
        rescue their species and save the Vingi holiday.
      </p>
    </div>
    <div className={style.infoSectionImageWrapper}>
      <div className={style.infoSectionImage}></div>
    </div>
  </div>;
}
