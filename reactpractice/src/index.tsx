import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App'
import ReactDOM from 'react-dom';

interface Counter {
  count : number
}

const initialState :Counter  = { count: 0 };

function reducer(state = initialState, action :any) {
  if (action.type === '증가') {
    return { count : state.count + 1 }
  } else if (action.type === '감소'){
    return { count : state.count - 1 }
  } else {
    return initialState
  }
}

const store = createStore(reducer);

// store의 타입 미리 export 해두기 
export type RootState = ReturnType<typeof store.getState>

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
) 