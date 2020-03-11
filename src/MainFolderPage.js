import React from 'react';
import NoteList from "./NoteList";
import FolderList from "./Folder/FolderList";
import Mainheader from "./Mainheader";

export default function MainFolderPage(props){
    return(
        <section>
            <Mainheader />
            <FolderList folders={props.folders}/>
            <NoteList notes={props.notes}/>
        </section>
    )
}