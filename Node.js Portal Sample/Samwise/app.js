/// <reference path="./models/crmService.ts" />
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var authorityHostUrl = "https://login.windows.net";
var tenant = "";
var clientId = "";
var username = "";
var password = "";
var resource = "Microsoft.CRM";
var authorityUrl = authorityHostUrl + "/" + tenant;
var templateAuthUrl = authorityUrl + "/oauth2/authorize?response_type=code&client_id=" + clientId + "&resource=" + resource;
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
    secret: clientId
}));
app.use(app.router);
var authenticationToken;
exports.getToken = function () { return authenticationToken; };
var crmWebApiEndpoint = "https://typescriptdemo.crm.dynamics.com/api/data";
exports.getEndpoint = function () { return crmWebApiEndpoint; };
var stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
var routes = require('./routes/index');
app.get('/', routes.index);
app.get('/contact', routes.contact);
app.get('/invoices', routes.invoices);
app.post('/login', routes.login);
var adal = require("adal-node");
var adalContext = new adal.AuthenticationContext(authorityUrl);
adalContext.acquireTokenWithUsernamePassword(resource, username, password, clientId, function (err, tokenResponse) {
    if (err) {
        console.log('well that didn\'t work: ' + err.stack);
    }
    else {
        console.log(tokenResponse);
        authenticationToken = tokenResponse.accessToken;
    }
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});
//# sourceMappingURL=app.js.map