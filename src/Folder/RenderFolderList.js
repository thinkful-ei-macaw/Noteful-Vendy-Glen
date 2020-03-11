import React from 'react';
import { Link } from 'react-router-dom';


class RenderFolderList extends React.Component {



    render() {



        const folderData = this.props.name;

        return (
      
                <li>
                    <Link to= {'/folder/' + this.props.id} > 
                    {folderData} 
                    </Link>
                </li>
            
        )
    }
}

export default RenderFolderList;