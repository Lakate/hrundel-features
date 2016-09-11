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

export const filterMentor = mentor => {
    return {
        type: 'FILTER_MENTOR',
        mentor
    };
};

export function getCommitsAndComments(task, login) {
    return dispatch => {
        return fetch('/students/getCommentsAndCommits', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                number: task.number,
                type: task.taskType,
                mentor: task.mentor,
                status: task.status,
                pr: task.pr,
                commentsAndCommits: task.commentsAndCommits,
                login
            })
        })
            .then(response => response.json())
            .then(student => dispatch(refreshStudent(student)));
    };
}
