const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      params: req.params,
      query: req.query,
    });
    next();
  } catch (error) {
    return res.status(400).json({ message: error.issues[0].message });
  }
};

module.exports = { validate };
