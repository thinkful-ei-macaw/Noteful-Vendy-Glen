import React from 'react';
import Mainheader from './Mainheader';


export default function DetailedNote(props){
    

        return(
            <section>
                <Mainheader />
                <button onClick={()=>props.history.goBack()}>Go Back</button>
                <br />
                {props.folder.name}
                <li>
                    <div>{props.note.name}</div>
                    <div>{props.note.modified} </div>
                    <div>{props.note.content}</div>
                </li>
            </section>
        );
    

}

