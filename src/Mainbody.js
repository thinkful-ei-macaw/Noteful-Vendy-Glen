import React from 'react';
import MainNoteComponent from './MainNoteComponent';
import MainFolderComponent from './MainFolderComponent';
import './Mainbody.css';

class MainBody extends React.Component {

    render() {
        return (
            <section className="main-body">
                <div className="component-body">
                    <MainFolderComponent />
                    <MainNoteComponent />
                </div>
            </section>
        )
    }



}

export default MainBody;