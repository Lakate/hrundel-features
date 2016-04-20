const initialState = {
    students: [],
    selectedStudentId: null
};

exports.boardApp = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            return {
                students: state.students.concat([action.student]),
                selectedStudentId: state.selectedStudentId
            };
        case 'UPDATE_STUDENT':
            return {
                students: state.students.map(student => {
                    if (student.id === action.selectedStudentId) {
                        return action.student;
                    }
                    return student;
                }),
                selectedStudentId: state.selectedStudentId
            };
        case 'SELECT_STUDENT':
            return {
                students: state.students,
                selectedStudentId: action.selectedStudentId
            };
        default:
            return state;
    }
};
