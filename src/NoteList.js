import React from 'react';
import MainNoteComponent from './Notes/MainNoteComponent';
import './Mainbody.css';

class NoteList extends React.Component {

    render() {

        return (
            <section className="main-body">
                <MainNoteComponent store={this.props.store} />
            </section>
        )
    }

}

export default NoteList;