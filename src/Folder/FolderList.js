import React from 'react';
import RenderFolderList from './RenderFolderList';


class FolderList extends React.Component {

    static defaultProps = {
        folders: [],
        notes: []
    }

    render() {

        let folders = [];

            folders = this.props.folders.map(result => {
                return <RenderFolderList key={result.id} 
                id={result.id} name={result.name} />
            })
        return (
            <section >
                <ul>
                    {folders}
                </ul>
                <button type="submit">Add Folder</button>
            </section>
        )
    }

}

export default FolderList;