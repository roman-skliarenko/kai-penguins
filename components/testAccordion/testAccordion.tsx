import React, { useRef } from 'react';
import style from './testAccordion.module.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example() {
  const refer = useRef()
  return (
    <Accordion allowZeroExpanded={true} allowMultipleExpanded={true} className={style.accordion}>
      <AccordionItem className={style.accordion__item}>
        <AccordionItemHeading className={style.accordion__heading}>
          <AccordionItemButton className={style.accordion__button}>
            What is Kai Penguin? <div ref={refer} className={style.arrowUp}/>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={style.accordion__panel}>
          <p>
            It is a small cute penguin. It wants to calmly chill on a piece of ice and mind its own business. It
            definitely does not want to fight for survival.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={style.accordion__item}>
        <AccordionItemHeading className={style.accordion__heading}>
          <AccordionItemButton className={style.accordion__button}>
            Why Penguin?
            <div className={style.arrowUp}/>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={style.accordion__panel}>
          <p>
            They are so cute and fearless, so why not. While creating them we found out that currently, penguins are
            on the verge of extinction. If climate change continues at its actual rate, more than 98 percent of
            emperor penguin colonies are expected to become quasi-extinct by the turn of the century. We’d like to pay
            people’s attention to that enormous problem in order to rescue this wonderful species of animals.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={style.accordion__item}>
        <AccordionItemHeading className={style.accordion__heading}>
          <AccordionItemButton className={style.accordion__button}>
            How much does a Kai Penguin cost?
            <div className={style.arrowUp}/>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={style.accordion__panel}>
          <p>
            0.02 ETH + gas.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={style.accordion__item}>
        <AccordionItemHeading className={style.accordion__heading}>
          <AccordionItemButton className={style.accordion__button}>
            How can I get a Kai Penguin?
            <div className={style.arrowUp}/>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={style.accordion__panel}>
          <p>
            Kai Penguin will be available for purchase on our website. At the time of purchase, a randomly selected
            Kai Penguin will be minted on the blockchain and delivered to your wallet and Opensea account.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={style.accordion__item}>
        <AccordionItemHeading className={style.accordion__heading}>
          <AccordionItemButton className={style.accordion__button}>
            What is featured Royal Kai Penguin?
            <div className={style.arrowUp}/>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={style.accordion__panel}>
          <p>
            It’s the set of 10 penguins that boost all this stuff.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
