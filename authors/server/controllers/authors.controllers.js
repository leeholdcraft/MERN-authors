const Authors = require("../models/authors.model");

module.exports.findAllAuthors = (req, res) => {
 Authors.find()
    .then(allAuthors => res.json({Authors: allAuthors }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleAuthors = (req, res) => {
	Authors.findOne({ _id: req.params.id })
		.then(oneSingleAuthors => res.json({Authors: oneSingleAuthors }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAuthors = (req, res) => {
 Authors.create(req.body)
    .then(newlyCreatedAuthors => res.json({Authors: newlyCreatedAuthors }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingAuthors = (req, res) => {
 Authors.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
    .then(updatedAuthors => res.json({Authors: updatedAuthors }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingAuthors = (req, res) => {
 Authors.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
