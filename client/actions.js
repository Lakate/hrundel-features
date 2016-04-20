export const addStudent = student => {
    return {
        type: 'ADD_STUDENT',
        student
    };
};

export const updateStudent = student => {
    return {
        type: 'UPDATE_STUDENT',
        student
    };
};

export const selectStudent = selectedStudentId => {
    return {
        type: 'SELECT_STUDENT',
        selectedStudentId
    };
};

export function fetchAddNote(student) {
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

export function fetchUpdateStudent(newStudent, id) {
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
