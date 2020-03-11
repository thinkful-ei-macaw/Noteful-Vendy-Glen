import React from 'react';



class RenderNoteComponent extends React.Component {

    render() {

        const name = this.props.name;
        const modified = this.props.modified;
        return (

            <section>
                <li>{name} <br />{modified} <br /><button type="submit">Delete</button></li>
            </section>

        )
    }

}

export default RenderNoteComponent;