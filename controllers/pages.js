exports.index = (req, res) => {
    res.send('Hello, User!');
}

exports.error404 = (req, res) => {
    res.sendStatus(404);
}