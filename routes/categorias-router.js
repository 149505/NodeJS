'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/categoria-controller');

let _ctrl = new controller();

router.use(function(req, res, next) {
    res.send('Hello World');
  });
  

router.get("/", _ctrl.get)

router.get("/:id", _ctrl.getById)

router.get("/:id", _ctrl.put)

router.get("/", _ctrl.post)

router.get("/:id", _ctrl.delete)

// router.get("/", (req, res) => {
    
// })

// router.get("/:id", (req, res) => {
    
//  })

// router.post("/", (req, res) => { })

// router.put("/:id", (req, res) => { })

// router.delete("/:id", (req, res) => { })

module.express = router;