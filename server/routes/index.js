const express = require('express');
const router = express.Router();

const heroesService = require('../hero-service');

const villainService = require('../villain-service');

router.get('/heroes', (req, res) => {
  heroesService.get(req, res);
});

router.put('/hero', (req, res) => {
  heroesService.create(req, res);
});

router.post('/hero', (req, res) => {
  heroesService.update(req, res);
});

router.delete('/hero/:id', (req, res) => {
  heroesService.destroy(req, res);
});


router.get('/villains', (req, res) => {
  villainService.get(req, res);
});

router.put('/villain', (req, res) => {
  villainService.create(req, res);
});

router.post('/villain', (req, res) => {
  villainService.update(req, res);
});

router.delete('/villain/:id', (req, res) => {
  villainService.destroy(req, res);
});

module.exports = router;
