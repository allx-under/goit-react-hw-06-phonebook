import { createStore } from 'redux';
import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';

const initialStore = {
  items: [],
  filter: '',
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...store, items: [...store.items, action.payload] };

    case REMOVE_CONTACT:
      return {
        ...store,
        items: store.items.filter(({ id }) => id !== action.payload),
      };
    case SET_FILTER:
      return { ...store, filter: action.payload };
    default:
      return store;
  }
};
const store = createStore(reducer);

export default store;
