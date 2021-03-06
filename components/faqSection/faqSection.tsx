import style from './FaqSection.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqSection = () => {

  return (
    <div className={style.sectionWrapper}>
      <h2 className={style.sectionTitle}>FAQ</h2>
      <div className={style.accordionWrapper}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={style.titleTypography}>What is Kai Penguin? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.contentTypography}>
              It is a small cute penguin. It wants to calmly chill on a piece of ice and mind its own business. It
              definitely does not want to fight for survival.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.titleTypography}>Why Penguin?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.contentTypography}>
              They are so cute and fearless, so why not. While creating them we found out that currently, penguins are
              on the verge of extinction. If climate change continues at its actual rate, more than 98 percent of
              emperor penguin colonies are expected to become quasi-extinct by the turn of the century. We’d like to pay
              people’s attention to that enormous problem in order to rescue this wonderful species of animals.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.titleTypography}>How much does a Kai Penguin cost?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.contentTypography}>
              0.02 ETH + gas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.titleTypography}>How can I get a Kai Penguin?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.contentTypography}>
              Kai Penguin will be available for purchase on our website. At the time of purchase, a randomly selected
              Kai Penguin will be minted on the blockchain and delivered to your wallet and Opensea account.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.titleTypography}>What is featured Royal Kai Penguin?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.contentTypography}>
              It’s the set of 10 penguins that boost all this stuff.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;
