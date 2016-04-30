import React from 'react';

const search = React.createClass({
    render: function () {
        // const {students, selectedStudentId} = this.props.store.getState();
        return (
            <div className="search">
                <input className="search__input" name="search" type="text"
                       placeholder="Search people by name..." required />
                <button className="search__button" type="submit">Search</button>
            </div>
        );
    }
});

export default search;
