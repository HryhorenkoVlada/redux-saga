import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseCount,
  decreaseCount,
  getLatestNews,
} from './redux/actions/actionCreator';

const App = () => {
  const counter = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  const handleNews = () => {
    dispatch(getLatestNews());
  };

  return (
    <>
      <div style={{ padding: '50px 0px 0px 50px' }}>
        <button onClick={handleIncrease}>+</button>
        <span>{counter}</span>
        <button onClick={handleDecrease}>-</button>
      </div>
      <div style={{ padding: '50px 0px 0px 50px' }}>
        <button onClick={handleNews}>Get News</button>
      </div>
    </>
  );
};

export default App;
