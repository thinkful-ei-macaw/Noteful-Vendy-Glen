import React from 'react';
import Mainheader from './Mainheader';
import NoteList from './NoteList';
import FolderList from './Folder/FolderList';
import { Switch, Route, Router } from 'react-router-dom';
import store from './store';
import './App.css';


class Mainapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      store: store

    }
  }




  render() {


    return (
      <div>
        <Router>
          <Switch>
            <section className="App">
              <Mainheader />
              <Route path='/NotePath/Notes' component={NoteList} store={this.state.store} />
              <Route path='/FolderPath/Folder' component={FolderList} />
            </section>
          </Switch>
        </Router>

      </div>
    )



  }
}

export default Mainapp;
