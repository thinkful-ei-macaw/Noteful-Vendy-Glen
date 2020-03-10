import React from 'react';


class RenderFolderList extends React.Component {



    render() {



        const folderData = this.props.name;

        return (
            <section>
                <li>{folderData}</li>
            </section>
        )
    }
}

export default RenderFolderList;