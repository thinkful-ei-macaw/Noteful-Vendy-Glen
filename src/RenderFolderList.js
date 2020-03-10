import React from 'react';


class RenderFolderList extends React.Component {



    render() {
        console.log(this.props)


        const folderData = this.props.name;

        return (
            <section>
                <li>{folderData}</li>
            </section>
        )
    }
}

export default RenderFolderList;