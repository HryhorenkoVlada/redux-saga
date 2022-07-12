import {
  INCREMENT,
  DECREMENT,
  GET_LATEST_NEWS,
  SET_LATEST_NEWS,
} from '../constants';

export const increaseCount = () => ({
  type: INCREMENT,
});

export const decreaseCount = () => ({
  type: DECREMENT,
});

export const getLatestNews = () => ({
  type: GET_LATEST_NEWS,
});
export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});
