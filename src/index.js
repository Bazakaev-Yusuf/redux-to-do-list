import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createStore } from 'redux';

const initialState = [
  {
    name: 'React',
    done: false,
    id: Math.random().toString(10).substring(2, 8),
  },
  {
    name: 'JS',
    done: false,
    id: Math.random().toString(10).substring(2, 8),
  },
  {
    name: 'Html',
    done: false,
    id: Math.random().toString(10).substring(2, 8),
  },
  {
    name: 'Css',
    done: false,
    id: Math.random().toString(10).substring(2, 8),
  }
]

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'add': return [...state, {
      name: action.name,
      done: false,
      id: action.id,
    }]
    case 'check' : return [...state.map(item => {
      return item.id === action.payload ? {...item, done: !item.done} : {...item}
    })]
    case 'delete' : return [...state.filter((item) => item.id !== action.payload)]
  }
  return state
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

