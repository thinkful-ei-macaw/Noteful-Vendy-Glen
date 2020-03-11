import React from "react";
import DetailedNote from "./DetailedNote";
import { Switch, Route } from "react-router-dom";
import store from "./store";
import "./App.css";
import MainPage from "./MainPage";
import MainFolderPage from "./MainFolderPage";

class Mainapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: store
    };
  }

  render() {


    return (
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <MainPage
              folders={this.state.store.folders}
              notes={this.state.store.notes}
            />
          )}
        />
        <Route
          path="/folder/:folderId"
          exact
          render={routerProps => (
            <MainFolderPage
              notes={this.state.store.notes.filter(
                note => note.folderId === routerProps.match.params.folderId
              )}
              folders={this.state.store.folders}
            />
          )}
        />
        <Route
          path="/note/:noteId"
          exact
          render={routerProps => {
            let firstNote =this.state.store.notes.filter(
              note => note.id === routerProps.match.params.noteId
            )[0]
            return <DetailedNote
              history={routerProps.history}
              note={firstNote}
              folder= {this.state.store.folders.filter(folder => folder.id === firstNote.folderId)[0]}
            />
          }}
        />

        <Route path="*" render={() => <h1>404 page not found</h1>} />
      </Switch>
    );

    
  }
}

export default Mainapp;
