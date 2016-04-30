const initialState = {
    students: [],
    selectedStudent: {}
};

exports.boardApp = (state = initialState, action) => {
    switch (action.type) {
        case 'REFRESH_STUDENT':
            return {
                students: (() => {
                    let newStudents = state.students.map(student => {
                        if (student._id === action.student._id) {
                            return action.student;
                        }
                        return student;
                    });

                    if (!(action.student in newStudents)) {
                        return newStudents.concat([action.student]);
                    }
                    return newStudents;
                })(),
                selectedStudent: state.selectedStudent
            };
        case 'SELECT_STUDENT':
            return {
                students: state.students,
                selectedStudent: (() => {
                    return action.selectedStudent;
                })()
            };
        default:
            return state;
    }
};
