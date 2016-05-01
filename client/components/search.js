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
        const className = this.props.foundData ?
            'search__result_invisible' : 'search__result_visible';
        return (
            <div className="search">
                <input className="search__input" name="search" type="text"
                       placeholder="Search people by name or login..."
                       onKeyUp={this.onKeyUp} required />
                <h3 className={'search__result ' + className}>Nothing found :(</h3>
            </div>
        );
    }
}

export default search;
