const Villain = require('./villain-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
  const docquery = Villain.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(villains => {
      res.json(villains);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, name, saying } = req.body;

  const villain = new Villain({ id, name, saying });
  villain
    .save()
    .then(() => {
      res.json(villain);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { id, name, saying } = req.body;

  Hero.findOne({ id })
    .then(villain => {
      villain.name = name;
      villain.saying = saying;
      villain.save().then(res.json(villain));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  Hero.findOneAndRemove({ id })
    .then(villain => {
      res.json(villain);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };
