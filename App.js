import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/Reducer/index';
import CounterAction from './src/Actions/CounterAction';



export default class App extends React.Component{
  constructor(props){
    super(props);
}
  render(){
    return(
        <Provider store={store}>
          <CounterAction />
       </Provider>
        

    );
  }
}


