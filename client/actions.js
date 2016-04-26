export const refreshStudent = student => {
    return {
        type: 'REFRESH_STUDENT',
        student
    };
};

export const selectStudent = selectedStudent => {
    return {
        type: 'SELECT_STUDENT',
        selectedStudent
    };
};

/*
export function fetchRefreshStudent(newStudent, id) {
    return dispatch => {
        return fetch('/todos/edit', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({id, newStudent})
        })
            .then(response => response.json())
            .then(json => dispatch(updateStudent(json)));
    };
}
*/
