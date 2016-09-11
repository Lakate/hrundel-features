module.exports.app = {
    db: {
        mongodb_URL: "mongodb://hrundel:hrundelurfu2015@ds045454.mlab.com:45454/board"
    },

    standardDeadline: 14 * 24 * 60 * 60 * 1000,
    standardPoints: 1,
    standardHalfPoints: 0.5,
    exceptionalTasks: [
        {
            repo: 'webdev-tasks-5',
            deadline: 21 * 24 * 60 * 60 * 1000,
            points: 2,
            halfPoints: 1
        },
        {
            repo: 'webdev-tasks-7',
            deadline: 21 * 24 * 60 * 60 * 1000,
            points: 2,
            halfPoints: 1
        }
    ],

    github: {
        version: "3.0.0",
        debug: true,
        protocol: "https",
        host: "api.github.com",
        timeout: 5000,
        organization: "urfu-2015",
        repos: ["webdev-tasks"]
    }
};
