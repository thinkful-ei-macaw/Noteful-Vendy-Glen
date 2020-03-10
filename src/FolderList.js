import React from 'react';
import RenderFolderList from './RenderFolderList';


class FolderList extends React.Component {

    static defaultProps = {
        folders: [],
        notes: []
    }

    render() {
        console.log(this.props.store)
        let folders = [];
        if (this.props.store)
            folders = this.props.store.folders.map(result => {
                return <RenderFolderList key={result.id} id={result.id} name={result.name} />
            })
        console.log(folders)
        return (
            <section >
                <ul>
                    <li>{folders}</li>

                </ul>
                <button type="submit">Add Folder</button>
            </section>
        )
    }

}

export default FolderList;