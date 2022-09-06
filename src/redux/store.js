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
  [addContact]: (state, action) => [...state, action.payload],

  [removeContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [setFilter]: (state, action) => action.payload,
});

const store = configureStore({
  reducer: {
    items,
    filter,
  },
});

export default store;
