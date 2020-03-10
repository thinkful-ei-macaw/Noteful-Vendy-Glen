import React from 'react';
import RenderNoteComponent from './RenderNoteComponent';

class MainNoteComponent extends React.Component {
    static defaultProps = {
        folders: [],
        notes: []
    }

    render() {
        let notes = [];
        if (this.props.store)
            notes = this.props.store.notes.map(result => {
                return <RenderNoteComponent key={result.id} content={result.content} folderId={result.folderId} id={result.id} modified={result.modified} name={result.name} />
            })
        return (
            <section>
                <ul>
                    <li>{notes}</li>

                </ul>
                <button type="submit">Add Note</button>
            </section>

        )
    }
}

export default MainNoteComponent;