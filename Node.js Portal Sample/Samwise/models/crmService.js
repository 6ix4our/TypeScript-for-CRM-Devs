var netHttps = require('../clients/net-https');
var odatajs = require('odatajs');
var Q = require('q');
var app = require('../app');
odatajs.oData.net.defaultHttpClient = netHttps.defaultHttpClient;
var getCrmServiceHeaders = function () {
    return {
        "Authorization": "Bearer " + app.getToken(),
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "OData-MaxVersion": "4.0",
        "OData-Version": "4.0"
    };
};
function ValidateUsername(username) {
    var deferred = Q.defer();
    var request = {
        requestUri: app.getEndpoint() + "/new_ValidateUsername",
        method: "POST",
        headers: getCrmServiceHeaders(),
        data: { "Username": username }
    };
    odatajs.oData.request(request, function (data, response) {
        deferred.resolve(data.value);
    }, function (data, response) { deferred.reject(response); });
    return deferred.promise;
}
exports.ValidateUsername = ValidateUsername;
function ValidateLogin(username, password) {
    var deferred = Q.defer();
    var request = {
        requestUri: app.getEndpoint() + "/new_ValidateCredentials",
        method: "POST",
        headers: getCrmServiceHeaders(),
        data: { "Username": username, "Password": password }
    };
    odatajs.oData.request(request, function (data, response) { deferred.resolve(data.value); }, function (data, response) { deferred.reject(response); });
    return deferred.promise;
}
exports.ValidateLogin = ValidateLogin;
function ListInvoices(contactId) {
    var deferred = Q.defer();
    var request = {
        requestUri: app.getEndpoint() + "/incidents?$select=title&$filter=customerid eq " + contactId,
        method: "GET",
        headers: getCrmServiceHeaders()
    };
    odatajs.oData.request(request, function (data, response) { deferred.resolve(data.value); }, function (data, response) { deferred.reject(response); });
    return deferred.promise;
}
exports.ListInvoices = ListInvoices;
//# sourceMappingURL=crmService.js.map