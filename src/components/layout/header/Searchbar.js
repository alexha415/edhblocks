import React,{useEffect, useState, Fragment} from 'react'

const Searchbar = () => {

  const [text, setText] = useState('');
  const [cards, setCards] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    fetchCards();
    setText('');
  }

  useEffect( () => {
    console.log(cards);
  },[cards]);
  const search_root = 'https://api.scryfall.com/cards/search';
  const fetchCards = async () => { 
    try {
      const res = await fetch(`${search_root}?q=${text}`);
      const data = await res.json();
      setCards(data.data);
    } catch (error) {
      console.log(error);
    }
   }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="input-group">   
          <input type="text" className='form-control' value={text} for='text' placeholder='Search...' name='text' onChange={onChange}/>
          <div className="input-group-append">
            <a href="#" className='btn btn-outline-secondary'>
              <i className='fa fa-search' style={{height: '100%'}}></i>
            </a>
          </div>  
        </div>
      </form>
    </Fragment>
  )
}

export default Searchbar
