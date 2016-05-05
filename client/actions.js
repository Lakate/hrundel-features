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

export const searchStudent = text => {
    return {
        type: 'SEARCH_STUDENT',
        text
    };
};

export const filterStudents = (filterType, isDesc) => {
    return {
        type: 'FILTER_STUDENTS',
        filterType,
        isDesc
    };
};
