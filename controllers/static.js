
var express = require('express');
var router = require('express').Router();

// front end javaScript
router.use(express.static(__dirname + '/../assets'));

// front end html -- try to change this to jade
router.use(express.static(__dirname + '/layouts'));

// bootstapping application - by serving up html
router.get("/", function (request,response) {
    console.log("GET recieved for / ");

    response.sendfile('layouts/posts.html');

    /***
     response.sendFile('layouts/posts.html').then(function (err, success) {
        if (err ) { return next(err) }
        console.log(success);
    })

     ***/

});

module.exports = router;