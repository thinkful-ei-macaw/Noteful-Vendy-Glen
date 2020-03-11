import React from 'react';
import RenderNoteComponent from './RenderNoteComponent';

class MainNoteComponent extends React.Component {
    static defaultProps = {
        folders: [],
        notes: []
    }

    render() {
        let notes = [];
        console.log(this.props.notes)
            notes = this.props.notes.map(result => {
                return <RenderNoteComponent key={result.id} 
                content={result.content} 
                olderId={result.folderId} 
                id={result.id} modified={result.modified} 
                name={result.name} />
            })
        return (
            <section>
                <ul>
                    {notes}

                </ul>
                <button type="submit">Add Note</button>
            </section>

        )
    }
}

export default MainNoteComponent;