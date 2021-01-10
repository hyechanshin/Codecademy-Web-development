const ideasRouter = require('express').Router();

module.export = ideasRouter;

ideasRouter.param('id', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.idea = idea;
        next();
    } else {
        res.status(404).send();
    }
});

ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

ideasRouter.post('/', (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
});

ideasRouter.put('/:ideaId', (req, res, next) => {
    let updatedInstance = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedInstance);
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('ideas', req.param.id);
    if (deleted) {
        req.status(204);
    } else {
        req.status(500);
    }
    req.send();
});

