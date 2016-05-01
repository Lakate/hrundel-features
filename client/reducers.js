const initialState = {
    students: [],
    filteredStudents: [],
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
                filteredStudents: state.filteredStudents,
                selectedStudent: state.selectedStudent
            };
        case 'SELECT_STUDENT':
            return {
                students: state.students,
                filteredStudents: state.filteredStudents,
                selectedStudent: (() => {
                    return action.selectedStudent;
                })()
            };
        case 'SEARCH_STUDENT':
            return {
                students: state.students,
                filteredStudents: state.students.filter(student => {
                    return student.name.toLowerCase().includes(action.text.toLowerCase()) ||
                        student.login.toLowerCase().includes(action.text.toLowerCase());
                }),
                selectedStudent: state.selectedStudent
            };
        default:
            return state;
    }
};
