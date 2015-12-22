var service = require('../models/crmService');
exports.applicationConfig = {
    name: "Samwise",
    year: new Date().getFullYear()
};
function index(req, res) {
    res.render('index', { config: exports.applicationConfig, title: 'Home', authenticated: req.session['isAuthenticated'] });
}
exports.index = index;
;
function contact(req, res) {
    res.render('contact', { config: exports.applicationConfig, title: 'Contact', message: 'I love/hate JavaScript, and so can you!', authenticated: req.session['isAuthenticated'] });
}
exports.contact = contact;
;
function invoices(req, res) {
    var myInvoices = service.ListInvoices("90C59309-F88C-E511-80E6-3863BB368DE0");
    myInvoices.then(function (value) {
        res.render('invoices', { config: exports.applicationConfig, title: 'Invoices', dataSet: value, authenticated: req.session['isAuthenticated'] });
    }, function (reason) { debugger; });
}
exports.invoices = invoices;
function login(req, res) {
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    var message = null;
    service.ValidateUsername(username)
        .then(function (isValid) {
        if (!isValid) {
            message = "Invalid Username.";
            return isValid;
        }
        else {
            return service.ValidateLogin(username, password);
        }
    })
        .done(function (isValid) {
        if (!isValid)
            message = "Invalid Password.";
        req.session['isAuthenticated'] = isValid;
        //req.session['isAuthenticated'] = true;
        res.render('index', { config: exports.applicationConfig, title: 'Home', authenticated: req.session['isAuthenticated'], invalidLogin: message });
    });
}
exports.login = login;
//# sourceMappingURL=index.js.map