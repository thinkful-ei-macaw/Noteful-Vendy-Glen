import React from 'react';
import MainNoteComponent from './MainNoteComponent';
import FolderList from './FolderList';
import './Mainbody.css';

class MainBody extends React.Component {

    render() {

        return (
            <section className="main-body">
                <div className="component-body">
                    <FolderList store={this.props.store} />
                    <MainNoteComponent />
                </div>
            </section>
        )
    }



}

export default MainBody;