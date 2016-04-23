import React, {Component} from 'react';

class studentLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className="student-line">
                <td>Kate Latypova</td>
                <td>i4got10</td>
                <td>23</td>
                <td>36</td>
            </tr>
        );
    }
}

export default studentLine;
