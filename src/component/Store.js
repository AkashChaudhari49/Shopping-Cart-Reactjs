import React from 'react';
import list from '../data';
import Cards from './Cards';
import '../styles/store.css';

const Store = ({handleClick}) => {
  return (
    <section>
      {list.map((item) => (
        < Cards key={item.id} item={item} handleClick={handleClick}/>
      ))}
    </section>
  )
};

export default Store;