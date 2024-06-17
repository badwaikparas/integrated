const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}

module.exports = validate