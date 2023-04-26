import express from 'express';
import Log from '../models/log';
import logsRepository from '../repositories/logs-repository';

const logsRouter = express.Router();
logsRouter.post('/logs', (req, res) => {
  const log: Log = req.body;
  logsRepository.create(log, (id) => {
    if (id) {
      res.status(201).location(`/logs/${id}`).send();
    } else {
      res.status(400).send();
    }
  });
});
logsRouter.get('/logs', (req, res) => {
  logsRepository.readAll((logs) => res.json(logs));
});
logsRouter.get('/logs/:id', (req, res) => {
  const id: number = +req.params.id;
  logsRepository.read(id, (item) => {
    if (item) {
      res.json(item);
    } else {
      res.status(404).send();
    }
  });
});
logsRouter.put('/logs/:id', (req, res) => {
  const id: number = +req.params.id;
  logsRepository.update(id, req.body, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});
logsRouter.delete('/logs/:id', (req, res) => {
  const id: number = +req.params.id;
  logsRepository.delete(id, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});
export default logsRouter;
