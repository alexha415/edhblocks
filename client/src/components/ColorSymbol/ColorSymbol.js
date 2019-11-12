import React from 'react'
import {connect} from 'react-redux'
import styles from './ColorSymbol.module.scss';

const ColorSymbol = ({colors, symbols}) => {

  return (
    <div className={`flex-row`}>
      {colors && colors.split("").map( color => {
        if( color === 'W'){
          return <img className={styles.symbol} src={symbols.uris.white_uri} alt="W"/>
        }
        if( color === 'U'){
          return <img className={styles.symbol} src={symbols.uris.blue_uri} alt="U"/>
        }
        if( color === 'B'){
          return <img className={styles.symbol} src={symbols.uris.black_uri} alt="B"/>
        }
        if( color === 'R'){
          return <img className={styles.symbol} src={symbols.uris.red_uri} alt="R"/>
        }
        if( color === 'G'){
          return <img className={styles.symbol} src={symbols.uris.green_uri} alt="G"/>
        }
        if( color === 'C'){
          return <img className={styles.symbol} src={symbols.colorless_uri} alt="C"/>
        }
      })}
    </div>
  )
}

export default connect(state => ({
  symbols: state.symbols
}), null)(ColorSymbol);