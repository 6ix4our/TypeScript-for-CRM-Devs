/*
 * GET home page.
 */
import express = require('express');
import service = require('../models/crmService');

export var applicationConfig = {
    name: "Samwise",
    year: new Date().getFullYear()
};

export function index(req: express.Request, res: express.Response) {
    res.render('index', { config: applicationConfig, title: 'Home', authenticated: req.session['isAuthenticated'] });
};

export function contact(req: express.Request, res: express.Response) {
    res.render('contact', { config: applicationConfig, title: 'Contact', message: 'I love/hate JavaScript, and so can you!', authenticated: req.session['isAuthenticated'] });
};

export function invoices(req: express.Request, res: express.Response) {
    var myInvoices = service.ListInvoices("90C59309-F88C-E511-80E6-3863BB368DE0");

    myInvoices.then((value) => {
        res.render( 'invoices', { config: applicationConfig, title: 'Invoices', dataSet: value, authenticated: req.session['isAuthenticated'] });
    },
        (reason) => { debugger; });
}

export function login(req: express.Request, res: express.Response) {
    console.log(req.body);

    var username = req.body.username;
    var password = req.body.password;
    var message: string = null;

    service.ValidateUsername(username)
        .then((isValid) => {
            if (!isValid) {
                message = "Invalid Username.";
                return isValid;
            }
            else {
                return service.ValidateLogin(username, password);
            }
        })
        .done((isValid) => {
            if (!isValid)
                message = "Invalid Password.";

            req.session['isAuthenticated'] = isValid;
            //req.session['isAuthenticated'] = true;
            res.render('index', { config: applicationConfig, title: 'Home', authenticated: req.session['isAuthenticated'], invalidLogin: message } );
        });
}
