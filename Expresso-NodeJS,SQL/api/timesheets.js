const express = require('express');
const employeesRouter = express.Router();

const sqlite3 = require('sqlite3');
const timesheetsRouter = require('../../../../Downloads/Compressed/capstone-project-2-expresso-solution/capstone-project-2-expresso-solution/api/timesheets');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

timesheetsRouter.param('timesheetId', (req, res, next, timesheetId) => {
    const sql = 'SELECT * FROM Timesheet WHERE Timesheet.id = $timesheetId';
    const values = {$timesheetId: timesheetId};
    db.get(sql, values, (error, timesheet) => {
      if (error) {
        next(error);
      } else if (timesheet) {
        next();
      } else {
        res.sendStatus(404);
      }
    });
  });

timesheetsRouter.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM Timesheet WHERE Timesheet.employee_id = $employeeId';
    const values = { $employeeId: req.params.employeeId};
    db.get(sql, values,(error, timesheets) => {
        if (error) {
            next(error);
        } else {
            res.status(200).json({timesheets: timesheets});
        }
    });
});

timesheetsRouter.post('/', (req, res, next) => {
  const hours = req.body.employee.hours,
    rate = req.body.employee.rate,
    date = req.body.employee.date,
    employeeId = req.body.employee.employeeId;
  if (!hours || !rate || !date) {
    return res.sendStatus(404);
  }

  const sql = 'INSERT INTO Timesheet (hours, rate, date, employeeId) VALUES ($hour, $rate, $date, $employeeId)';
  const values = {
    $hours: hours,
    $rate: rate,
    $date: date,
    $employeeId: employeeId
  };
  db.run(sql, values, function(error) {
    if (error) {
      next(err0r);
    } else {
      db.get(`SELECT * FROM Timesheet WHERE Timesheet.id = ${this.lastID}`,
      (error, timesheet) => {
        res.status(201).json({timesheet: timesheet})
      });
    }
  });
});


timesheetsRouter.put('/:timesheetId', (req, res, next) => {
  const hours = req.body.timesheet.hours,
        rate = req.body.timesheet.rate,
        date = req.body.timesheet.date,
        employeeId = req.params.employeeId;
  if (!hours || !rate || !date) {
    return res.sendStatus(400);
  }

  const sql = 'UPDATE Timesheet SET hours = $hours, rate = $rate, date = $date, employee_id = $employeeId WHERE Timesheet.id = $timesheetId';
  const values = {
    $hours: hours,
    $rate: rate,
    $date: date,
    $employeeId: employeeId,
    $timesheetId: req.params.timesheetId
  };

  db.run(sql, values, function(error) {
    if (error) {
      next(error);
    } else {
      db.get(`SELECT * FROM Timesheet WHERE TimesheetId = ${req.params.timesheetId}`,
      (error, timesheet) => {
        res.status(200).json({ timesheet: timesheet })
      });
    }
  });
});

timesheetsRouter.delete('/:timesheetId', (req, res, next) => {
  const sql = 'DELETE FROM Timesheet WHERE Timesheet.id = $timesheetId';
  const values = {$timesheetId:req.params.timesheetId};

  db.run(sql, values, (error) => {
    if (error) {
      next (error);
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = timesheetsRouter;