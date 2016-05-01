const initialState = {
    students: [],
    filteredStudents: [],
    foundData: true,
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
                foundData: true,
                selectedStudent: state.selectedStudent
            };
        case 'SELECT_STUDENT':
            return {
                students: state.students,
                filteredStudents: state.filteredStudents,
                foundData: true,
                selectedStudent: (() => {
                    return action.selectedStudent;
                })()
            };
        case 'SEARCH_STUDENT':
            const filteredData = state.students.filter(student => {
                return student.name.toLowerCase().includes(action.text.toLowerCase()) ||
                    student.login.toLowerCase().includes(action.text.toLowerCase());
            });

            return {
                students: state.students,
                filteredStudents: filteredData,
                foundData: filteredData.length > 0,
                selectedStudent: state.selectedStudent
            };
        default:
            return state;
    }
};
