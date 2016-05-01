import React, {Component} from 'react';
import {searchStudent} from '../actions';

class search extends Component {
    constructor(props) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onKeyUp(e) {
        this.props.dispatch(searchStudent(e.target.value));
    }

    render() {
        return (
            <div className="search">
                <input className="search__input" name="search" type="text"
                       placeholder="Search people by name or login..."
                       onKeyUp={this.onKeyUp} required />
                <button className="search__button" type="submit">Search</button>
            </div>
        );
    }
}

export default search;
