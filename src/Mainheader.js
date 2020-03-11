import React from 'react';
import { Link } from 'react-router-dom';

class Mainheader extends React.Component {

    render() {
        return (
            <section>
                <Link to= {'/'} ><h1>Noteful</h1></Link>
                
            </section>
        )
    }


}

export default Mainheader;