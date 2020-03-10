import React from 'react';
import Mainheader from './Mainheader';
import MainBody from './Mainbody';
import FolderList from './FolderList';
import store from './store';
import './App.css';


class Mainapp extends React.Component {

  state = {

    store: store

  }



  render() {
    console.log(this.state.store)

    return (
      <section className="App">
        <Mainheader />
        <MainBody store={this.state.store} />
        <FolderList />
      </section>
    )

  }


}







export default Mainapp;
