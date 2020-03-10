import React from 'react';
import MainNoteComponent from './Notes/MainNoteComponent';
import FolderList from './Folder/FolderList';
import './Mainbody.css';

class NoteList extends React.Component {

    render() {

        return (
            <section className="main-body">
                <div className="component-body">
                    <FolderList store={this.props.store} />

                    <MainNoteComponent store={this.props.store} />

                </div>
            </section>
        )
    }

}

export default NoteList;