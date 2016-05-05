const initialState = {
    students: [],
    filteredStudents: [],
    foundData: true,
    selectedStudent: {},
    taskCounter: 0,
    filterType: 'result',
    isDesc: true
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
                idDesc: state.isDesc,
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
                idDesc: state.isDesc,
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
                idDesc: state.isDesc,
                taskCounter: state.taskCounter,
                selectedStudent: state.selectedStudent
            };
        case 'FILTER_STUDENTS':
            function compare(a, b) {
                if (action.isDesc) {
                    if (a[action.filterType] > b[action.filterType]) {
                        return -1;
                    }
                    if (a[action.filterType] < b[action.filterType]) {
                        return 1;
                    }
                } else {
                    if (a[action.filterType] < b[action.filterType]) {
                        return -1;
                    }
                    if (a[action.filterType] > b[action.filterType]) {
                        return 1;
                    }
                }
                return 0;
            }

            const sortedData = state.students.sort(compare);

            return {
                students: sortedData,
                filteredStudents: state.filteredStudents,
                foundData: sortedData.length > 0,
                filterType: action.filterType,
                idDesc: action.isDesc,
                taskCounter: state.taskCounter,
                selectedStudent: state.selectedStudent
            };
        default:
            return state;
    }
};
