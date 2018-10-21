import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import ItemModal from './components/ItemModal';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';

class  App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal/>
            <List />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
