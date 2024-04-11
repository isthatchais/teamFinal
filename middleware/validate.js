const validator = require('../helpers/validate');



const getUser = (req, res, next) => {
  const validationRule = {
    googleId: 'string',
    firstName: ['required', 'regex:/^[A-Za-z]{2,}$'],
    lastName: ['required', 'regex:/^[A-Za-z]{3,}$'],
    displayName: ['required', 'regex:/^[A-Za-z ]{5,}$'],
    image: 'string',
    createdAt: 'string',
    assignedJournals: []
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


const saveUser = (req, res, next) => {
  const validationRule = {
    googleId: 'string',
    firstName: ['required', 'regex:/^[A-Za-z]{2,}$'],
    lastName: ['required', 'regex:/^[A-Za-z]{3,}$'],
    displayName: ['required', 'regex:/^[A-Za-z ]{5,}$'],
    image: 'string',
    createdAt: 'string',
    assignedJournals: []
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


const updateUser = (req, res, next) => {
  const validationRule = {
    googleId: 'string',
    firstName: ['required', 'regex:/^[A-Za-z]{2,}$'],
    lastName: ['required', 'regex:/^[A-Za-z]{3,}$'],
    displayName: ['required', 'regex:/^[A-Za-z ]{5,}$'],
    image: 'string',
    createdAt: 'string',
    assignedJournals: []
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


const getEntry =(req, res, next) => {
  const validationRule = {
    journalId: 'string',
    title: ['required'],
    content: ['required'],
    mood: 'string',
    tags: 'string',
    createdAt: ['required'],
    updatedAt: ['required'],
  };
  validator(req.body, validationRule, {}, (err, status) =>{
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


const saveEntry =(req, res, next) => {
  const validationRule = {
    journalId: 'string',
    title: ['required'],
    content: ['required'],
    mood: 'string',
    tags: 'string',
    createdAt: ['required'],
    updatedAt: ['required'],
  };
  validator(req.body, validationRule, {}, (err, status) =>{
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const updateEntry =(req, res, next) => {
  const validationRule = {
    journalId: 'string',
    title: ['required'],
    content: ['required'],
    mood: 'string',
    tags: 'string',
    createdAt: ['required'],
    updatedAt: ['required'],
  };
  validator(req.body, validationRule, {}, (err, status) =>{
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const getJournal =(req, res, next) => {
  const validationRule = {
    journalTitle: ['required'],
    theme: 'string',
    createdUserId: 'string',
    createdAt: ['required'],
    updatedAt: ['required'],
    entries:'string'
  };
  validator(req.body, validationRule, {}, (err, status) =>{
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveJournal =(req, res, next) => {
  const validationRule = {
    journalTitle: ['required'],
    theme: 'string',
    createdUserId: 'string',
    createdAt: ['required'],
    updatedAt: ['required'],
    entries:'string'
  };
  validator(req.body, validationRule, {}, (err, status) =>{
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const updateJournal =(req, res, next) => {
  const validationRule = {
    journalTitle: ['required'],
    theme: 'string',
    createdUserId: 'string',
    createdAt: ['required'],
    updatedAt: ['required'],
    entries:'string'
  };
  validator(req.body, validationRule, {}, (err, status) =>{
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


const getMood =(req, res, next) => {
  const validationRule = {
    moodName: ['required'],
    moodIcon: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) =>{
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


const saveMood =(req, res, next) => {
  const validationRule = {
    moodName: ['required'],
    moodIcon: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) =>{
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const updateMood =(req, res, next) => {
  const validationRule = {
    moodName: ['required'],
    moodIcon: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) =>{
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


module.exports = {

  getUser,
  saveUser,
  updateUser,
  getEntry,
  saveEntry,
  updateEntry,
  getJournal,
  saveJournal,
  updateJournal,
  getMood,
  saveMood,
  updateMood,
  
};


