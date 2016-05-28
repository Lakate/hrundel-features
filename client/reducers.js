const initialState = {
    students: [],
    filteredStudents: [],
    foundData: true,
    findMentor: false,
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
                    let refreshStudent = false;
                    let newStudents = state.students.map(student => {
                        if (student._id === action.student._id) {
                            refreshStudent = true;
                            return action.student;
                        }
                        return student;
                    });

                    if (!refreshStudent) {
                        return newStudents.concat([action.student]);
                    }
                    return newStudents;
                })(),
                filteredStudents: state.filteredStudents,
                foundData: true,
                findMentor: state.findMentor,
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
                findMentor: state.findMentor,
                filterType: state.filterType,
                idDesc: state.isDesc,
                taskCounter: state.taskCounter,
                selectedStudent: (() => {
                    return action.selectedStudent;
                })()
            };
        case 'SEARCH_STUDENT':
            let filteredData = state.students.filter(student => {
                return (student.name &&
                    student.name.toLowerCase().includes(action.text.toLowerCase())) ||
                    student.login.toLowerCase().includes(action.text.toLowerCase());
            });
            if (action.text === '') {
                filteredData = [];
            }

            return {
                students: state.students,
                filteredStudents: filteredData,
                foundData: action.text === '' ? true : filteredData.length > 0,
                findMentor: state.findMentor,
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
                findMentor: state.findMentor,
                filterType: action.filterType,
                idDesc: action.isDesc,
                taskCounter: state.taskCounter,
                selectedStudent: sortedData[0]
            };
        case 'FILTER_MENTOR':
            let filteredByMentor = state.students.filter(student => {
                return (student.mentor === action.mentor);
            });
            if (!action.mentor) {
                filteredByMentor = [];
            }

            return {
                students: state.students,
                filteredStudents: filteredByMentor,
                foundData: state.foundData,
                findMentor: filteredByMentor.length > 0,
                filterType: state.filterType,
                idDesc: state.isDesc,
                taskCounter: state.taskCounter,
                selectedStudent: state.selectedStudent
            };

        default:
            return state;
    }
};
