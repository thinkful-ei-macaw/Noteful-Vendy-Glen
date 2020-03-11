import React from 'react';
import Mainheader from './Mainheader';
import FolderList from './Folder/FolderList';
import NoteList from './NoteList';

export default function MainPage(props){

    return(
        <section>
            <Mainheader />
            <FolderList folders={props.folders}/>
            <NoteList notes={props.notes}/>
        </section>
    )

}

