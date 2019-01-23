const express = require('express');
const ObjectID = require('mongodb').ObjectID;


const CreateRouter = function(collection) {

  const router = express.Router();

  //SHOW
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });
  //SHOW BY ID
  router.get('/:id', (req,res) => {
    const id = req.params.id;
    collection
      .findOne({_id: ObjectID(id)})
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });
  // CREATE
  router.post('/', (req, res) => {
      const newItem = req.body;
      collection
      .insertOne(newItem)
      .then(() => collection.find().toArray())
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });
  // DESTROY
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
      collection
      .deleteOne({_id: ObjectID(id)})
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
      .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  return router;

};

module.exports = CreateRouter;
