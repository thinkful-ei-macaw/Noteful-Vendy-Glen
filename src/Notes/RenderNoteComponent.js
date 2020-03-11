import React from 'react';
import { Link } from 'react-router-dom';

class RenderNoteComponent extends React.Component {

    render() {

        const name = this.props.name;
        const modified = this.props.modified;
        return (

          
                <li>
                    <Link to ={"/note/"+ this.props.id} >
                        {name} <br />{modified} <br />
                    <button type="submit">Delete</button>
                    </Link>
                </li>
            

        )
    }

}

export default RenderNoteComponent;