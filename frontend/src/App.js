import React, {Component} from 'react';
import Users from './components/users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    showUserList: true,
    isUpdate: false
  }
  
  componentDidMount() {
    this.getUsers();
  }

  onAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    event.target.name.value = "";
    this.addUser(name);
    this.getUsers();
  } 

  onUpdateUser = event => {
    event.preventDefault();
    console.log('Update');

    const oldName = event.target.oldName.value;
    const newName = event.target.newName.value;
    event.target.oldName.value = "";
    event.target.newName.value = "";

    this.updateUser(oldName, newName);
    this.getUsers();
  }

  toggleUserList = event => {
    event.preventDefault();
    this.setState(prevState => ({
      showUserList: !prevState.showUserList
    }))
  }

  toggleUpdateUser = (event, val) => {
    event.preventDefault();
    this.setState({isUpdate: val})

    console.log(this.updateUser);
  }

  getUsers = async() =>  {
    await axios.get('/user')
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  addUser = async(name) =>  {
    await axios.post('/user', {name})
      .then(res => {
        console.log(res);
      })
  }

  updateUser = async(oldName, newName) => {
    await axios.put('/user', {oldName, newName})
      .then(res => {
        console.log(res);
      })
  }

  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#" onClick={(e) => this.toggleUpdateUser(e, false)}>Add User <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={(e) => this.toggleUpdateUser(e, true)}>Update User</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.toggleUserList}>User List</a>
                </li>
              </ul>
            </div>
          </nav>

          {!this.state.isUpdate && (
          <form onSubmit={this.onAddUser}>
            <div className="form-row align-items-center">
              <div className="col-sm-3 my-1">
                <label className="sr-only">Name</label>
                <input type="text" className="form-control" name="name" placeholder="Name" />
              </div>        
              <div className="col-auto my-1">
                <button type="submit" className="btn btn-primary">Add User</button>
              </div>     
            </div>
          </form>
          )}

          {this.state.isUpdate && (
            <form onSubmit={this.onUpdateUser}>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label>Old Name</label>
                <input type="text" className="form-control" name="oldName" placeholder="Old Name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-3">
                <label>New Name</label>
                <input type="text" className="form-control" name="newName" placeholder="New Name" />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">Update User</button>
          </form>
          )}
          
          {!this.state.showUserList && (
            <Users users={this.state.users} />
          )}
          
        </div>
        
    );
  }
  
}

export default App;
