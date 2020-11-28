import React, { useState } from 'react';
import './WishList.css';

export default function WishList(props) {
  const [typedWishes, setTypedWishes] = useState(''); // what you type in your input as a wish
  const [addedWishes, setAddedWishes] = useState([]); // array that takes all the wishes you typed

  const addToWishList = () => {
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
      <label htmlFor='wish-list'>You can add your wishes here 👇🏼</label>
      <input type='text' value={typedWishes} onChange={handleInput}></input>
      <button onClick={addToWishList}>Add Wish</button>
      {addedWishes.map((wish, i) => (
        <div key={i}>
          <p className='wishes'>{wish}</p>

          <button name={wish} onClick={(event) => removeWish(event)}>
            Remove Wish
          </button>
        </div>
      ))}
    </div>
  );
}
