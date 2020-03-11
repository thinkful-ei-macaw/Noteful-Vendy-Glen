import React from 'react';
import Mainheader from './Mainheader';
import NoteList from './NoteList';
import FolderList from './Folder/FolderList';
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
        <Mainheader />
        <section className="App">
          <FolderList store={this.state.store} />
          <NoteList store={this.state.store} />
        </section>
      </div>
    )




  }
}

export default Mainapp;
/* <Route path='/' render={() => (

  )}
  />
  <Route path='/' render={() => (

  )} /> */