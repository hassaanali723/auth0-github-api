import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      idTokens: '',
      profile: {}
     };
  }

  static defaultProps = {
    clientID: '1OCNZfc8mHfYEg7UmdOGHHE75heIpLMf',
    domain: 'dev-cpqq0sbz.us.auth0.com'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID,this.props.domain);
    this.lock.on('authenticated', (authResult) => {
      console.log(authResult);
    })
  }

  showLock(){
    this.lock.show();
  }

  render() { 
    return ( 
      <div className="App">
        
      <Header 
      onLogin={this.showLock.bind(this)} />
      <Github />

    </div>
     );
  }
}
 
export default App;
