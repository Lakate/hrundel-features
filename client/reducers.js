const initialState = {
    students: [],
    filteredStudents: [],
    foundData: true,
    selectedStudent: {},
    taskCounter: 0,
    filterType: 'result',
    filterDirection: 'DESC'
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
                filterType: state.filterType,
                filterDirection: state.filterDirection,
                taskCounter: (() => {
                    let currentMax = state.taskCounter;

                    for (let i in action.student.tasks) {
                        if (action.student.tasks[i].number > currentMax) {
                            currentMax = action.student.tasks[i].number;
                        }
                    }
                    return currentMax;
                })(),
                selectedStudent: state.selectedStudent
            };
        case 'SELECT_STUDENT':
            return {
                students: state.students,
                filteredStudents: state.filteredStudents,
                foundData: true,
                filterType: state.filterType,
                filterDirection: state.filterDirection,
                taskCounter: state.taskCounter,
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
                filterType: state.filterType,
                filterDirection: state.filterDirection,
                taskCounter: state.taskCounter,
                selectedStudent: state.selectedStudent
            };
        // case 'FILTER_STUDENTS':
        //     const filteredData = state.students.sort(student => {
        //         return student.name.toLowerCase().includes(action.text.toLowerCase()) ||
        //             student.login.toLowerCase().includes(action.text.toLowerCase());
        //     });
        //
        //     return {
        //         students: state.students,
        //         filteredStudents: filteredData,
        //         foundData: filteredData.length > 0,
        //         filterType: action.filterType,
        //         filterDirection: action.filterDirection,
        //         taskCounter: state.taskCounter,
        //         selectedStudent: state.selectedStudent
        //     };
        default:
            return state;
    }
};
