exports.index = (req, res) => {
    res.render('main', req.commonData);
};

exports.error404 = (req, res) => {
    res.sendStatus(404);
};
