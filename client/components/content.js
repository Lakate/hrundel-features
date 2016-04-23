import React from 'react';
import Header from './header';
import Search from './search';
import StudentTable from './studentTable';
import StudentCard from './studentCard';

const content = React.createClass({
    render: function () {
        // const {students, selectedStudentId} = this.props.store.getState();
        return (
            <div>
                <Header />
                <Search />
                <StudentCard />
                <StudentTable />
            </div>
        );
    }
});

export default content;
