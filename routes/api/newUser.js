const express = require('express');
router = expresee.Router();
const CodePro = require('../models/CodePro');
const router = require('./signup');
const { getMaxListeners } = require('../../models/codepro');

// Routes
router.get('/', (req,res) => {

    CodePro.find({})
        .then((data) => {
            console.lop('Data:', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerorta)
        })
})


router.post('/saveUser', (req,res) => {
    console.log('body: ', req.body);
    const data = req.body

    const newCodePro = new CodePro(data);

    //.save

    newCodePro.save((error) => {
        if (error) {
            res.status(500).json({msg: 'Sorry, internal server error'});
        } else {
            //CodePro
            res.json({
                msg: 'We recieved your data!!!!'
            });
        }
    })
});

router.get('/userName', (req,res) => {
    const data = {
        username: 'peterson',
        email: 'pete@gmail.com',
        password: '1234'
    }
})