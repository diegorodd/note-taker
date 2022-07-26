const router = require('express').Router();
const store = require('../db/store');

// GET "/api/notes" gets all notes
router.get('/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});



module.exports = router;