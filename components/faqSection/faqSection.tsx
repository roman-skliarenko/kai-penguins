import React from 'react';
import style from './FaqSection.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

const FaqSection = () => {
  const useStyles = makeStyles({
    root:{
      border: 'none',
      boxShadow: 'none',
      margin: '1px',
      marginBottom: '1px',
      padding: 0,
      outline: 'none',
    },
    rounded:{
      boxShadow: 'none',
      margin: '1px',
      marginBottom: '1px',
      border: 'none',
      outline: 'none',
    },
    expanded:{
      boxShadow: 'none',
      margin: '1px',
      marginBottom: '1px',
      border: 'none',
      outline: 'none',
    },
    disabled:{
      boxShadow: 'none',
      margin: '1px',
      marginBottom: '1px',
      border: 'none',
      outline: 'none',
    },
    gutters:{
      boxShadow: 'none',
      margin: '1px',
      marginBottom: '1px',
      border: 'none',
      outline: 'none',
    },
    region:{
      boxShadow: 'none',
      margin: '1px',
      marginBottom: '1px',
      border: 'none',
      outline: 'none',
    }
  })
  const classes = useStyles();

  return (
    <div className={style.faqSectionWrapper}>
      <h2 className={style.faqSectionTitle}>FAQ</h2>
      <div className={style.faqAccordionWrapper}>
        <Accordion
          className={classNames(classes.root, classes.region, classes.gutters, classes.rounded, classes.expanded)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={style.titleTypography}>What is Kai Penguin? </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography className={style.contentTypography}>
              It is a small cute penguin. It wants to calmly chill on a piece of ice and mind its own business. It
              definitely does not want to fight for survival.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  className={classNames(classes.root,classes.region,classes.gutters,classes.rounded,classes.expanded) }>
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
        <Accordion  className={classNames(classes.root,classes.region,classes.gutters,classes.rounded,classes.expanded) }>
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
        <Accordion  className={classNames(classes.root,classes.region,classes.gutters,classes.rounded,classes.expanded) }>
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
        <Accordion  className={classNames(classes.root,classes.region,classes.gutters,classes.rounded,classes.expanded) }>
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
