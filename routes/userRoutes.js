// Created by Valentin Belii
// Student code: c0886610
const express = require('express');
const router = express.Router();
const User = require('../models/user');


// Form to create a new user
router.get('/users/new', (req, res) => {
    res.render('new');
});

// Create user action
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.redirect('/users');
});

// Read users request
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.render('users', { users });
});

// Update user form
router.get('/users/edit/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('edit', { user });
});

// Request to server to eit user data
router.post('/users/edit/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/users');
});

// Delete user data request
router.post('/users/delete/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/users');
});

module.exports = router;
