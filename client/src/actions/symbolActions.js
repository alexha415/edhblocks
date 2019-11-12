import { GET_SYMBOLS } from './types';

export const getManaSymbols = () => async dispatch => {
  const res = await fetch(`https://api.scryfall.com/symbology`);
  const data = await res.json();
  const regex =  /{W}|{U}|{B}|{R}|{G}|{C}/
  const symbols = data.data.filter( (cardSymbol => cardSymbol.symbol.match(regex)))
  const payload = {}
  symbols.forEach(symbol => {
    switch(symbol.symbol){
      case "{W}":
        payload.white_uri = symbol.svg_uri
      case "{U}":
        payload.blue_uri = symbol.svg_uri
      case "{B}":
        payload.black_uri = symbol.svg_uri
      case "{R}":
        payload.red_uri = symbol.svg_uri
      case "{G}":
        payload.green_uri = symbol.svg_uri
      case "{C}":
        payload.colorless_uri = symbol.svg_uri
    }
  })
  dispatch({
    type: GET_SYMBOLS,
    payload
  })
}