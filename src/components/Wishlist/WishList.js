import React, { useState } from 'react';
import './WishList.css';

export default function WishList(props) {
  const [typedWishes, setTypedWishes] = useState(''); // what you type in your input as a wish
  const [addedWishes, setAddedWishes] = useState([]); // array that takes all the wishes you typed

  const addWish = () => {
    if (typedWishes !== '') {
      setAddedWishes([...addedWishes, typedWishes]);
    }
  };

  const handleInput = (e) => {
    setTypedWishes(e.target.value);
  };

  const removeWish = (e) => {
    const wishToRemove = e.target.getAttribute('name');
    setAddedWishes((wish) =>
      addedWishes.filter((wish) => wish !== wishToRemove)
    );
  };

  return (
    <div>
      <div className='input-label-container'>
        <label htmlFor='wish-list'>You can add your wishes here 👇🏼</label>
        <input type='text' value={typedWishes} onChange={handleInput}></input>
        <button className='addWish-button' onClick={addWish}>
          +
        </button>
      </div>

      {addedWishes.map((wish, i) => (
        <div className='wish-container' key={i}>
          <p className='wishes'>
            {wish}
            <div className='wish-description'>Description</div>
            <div
              className='remove-button'
              name={wish}
              onClick={(event) => removeWish(event)}
            >
              -
            </div>
          </p>
        </div>
      ))}
    </div>
  );
}
