import React, {Component} from 'react';
import Users from './components/users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: []
  }
  
  componentDidMount() {
    this.getUsers();
  }

  getUsers = async() =>  {
    await axios.get('/user')
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
        <Users users={this.state.users} />
      );
  }
  
}

export default App;
