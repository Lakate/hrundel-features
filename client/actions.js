export const updateStudent = student => {
    return {
        type: 'REFRESH_STUDENT',
        student
    };
};

export const selectStudent = selectedStudentId => {
    return {
        type: 'SELECT_STUDENT',
        selectedStudentId
    };
};

/*
export function fetchOnAddNote(student) {
    return dispatch => {
        return fetch('/todos/add', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(response => response.json())
            .then(json => dispatch(addStudent(json)));
    };
}

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
