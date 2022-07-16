success = (req, res, message, status = 200) => {
    res.status(status).send({
        error: '',
        body: message
    })
}

error = (req, res, message, status = 500) => {
    res.status(status).send({
        error: message,
        body: ''
    })
}

module.exports = {
    success,
    error,
}