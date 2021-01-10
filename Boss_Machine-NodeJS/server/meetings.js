const { deleteAllFromDatabase } = require('./db');

const meetingRouter = require('express').Router();

module.export = meetingRouter;


meetingRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

meetingRouter.post('/', (req, res, next) => {
    let newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
});

meetingRouter.delete('/:meetings', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    req.status(204).send();
});

