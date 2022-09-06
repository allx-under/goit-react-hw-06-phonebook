import { configureStore, createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilter } from './actions';

// const reducer = (store = initialStore, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return { ...store, items: [...store.items, action.payload] };

//     case REMOVE_CONTACT:
//       return {
//         ...store,
//         items: store.items.filter(({ id }) => id !== action.payload),
//       };
//     case SET_FILTER:
//       return { ...store, filter: action.payload };
//     default:
//       return store;
//   }
// };

const items = createReducer([], {
  [addContact]: (store, action) => [...store.items, action.payload],

  [removeContact]: (store, action) =>
    store.items.filter(({ id }) => id !== action.payload),

  //   [setFilter]: (store, action) => ({ ...store, filter: action.payload }),
});

const filter = createReducer('', {
  [setFilter]: (store, action) => action.payload,
});

const store = configureStore({
  reducer: {
    items,
    filter,
  },
});

export default store;
