import React from 'react';

class MainNoteComponent extends React.Component {
    render() {
        return (
            <section>
                <ul>
                    <li>Note 1<button type="submit">Delete Note</button></li>
                    <li>Note 2<button type="submit">Delete Note</button></li>
                </ul>
                <button type="submit">Add Note</button>
            </section>

        )
    }
}

export default MainNoteComponent;