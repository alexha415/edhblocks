import React from 'react'
import Section from './Section/Section';
import styles from './Information.module.scss';

const Information = () => {
  return (
    <div className={`${styles.information} flex-col`}>
    <h4>About</h4>
      <div className={`${styles.sections} flex-row`}>
        <Section 
        name={'What is Magic ?'} 
        desc="Magic: The Gathering, or MTG for short, is a collectible trading card game which involves two or more players battling it out for glory. Build a deck of cards and challenge opponents. Players start at twenty life and use their cards to damage the opponent. The goal is to drop the opponent's life to zero. MTG is one of, if not the most, popular TCG. With beautiful artwork and immersive strategy, most people are hooked once they get a chance to play."
        />
        <Section 
        name={'What is EDH ?'}
        desc={"EDH, or 'Commander', stands for 'Elder Dragon Highlander'. It was designed for casual multiplayer fun. There's nothing worse than having an odd number of players and being a spectator. EDH was created by a fanbase to solve this. The ultimate goal of this format is to have fun! Over the past decade, EDH has exploded into popularity. It has become so popular, that Wizards of the Coast started supplementing players with Commander-focused card sets."}
        />
      </div>
      <div className={`${styles.sections} flex-row`}>
        <Section 
        name={'How Do You Play ?'}
        desc={"Players start out by choosing a 'General/Commander' for their decks. You can only choose from a subset of card types, denoted with the keywords 'Legendary Creature' ( With some exceptions! ). Each of these unique cards are categorized by colors. The 'Color Pie' of Magic includes five colors, 'White, Blue, Black, Red, Green, and Colorless'. Cards can be a mix of any of these colors. When you choose a commander, Your deck-building strategy is then limited to the colors of your commander. This unique rule makes commander an extremely strategic format which amounts to endless options for deck-building. Each deck must consist of 100 cards (including your commander). Both of these rules means that players must be truly organized in order to build a powerful deck. EDHBlocks tries to help players organize their decks and provide an easy way of editing their decks whenever they feel like it!"}
        />
      </div>
    </div>
  )
}

export default Information
