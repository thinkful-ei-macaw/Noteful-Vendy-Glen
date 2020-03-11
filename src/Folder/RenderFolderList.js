import React from 'react';
import '../App.css';


class RenderFolderList extends React.Component {

    clickSubmit = () => {

        console.log('I was clicked')

    }

    render() {

        const folderData = this.props.name;

        return (
            <section>
                <li id="folderList" onClick={this.clickSubmit}>{folderData}</li>
            </section>
        )
    }
}

export default RenderFolderList;