var netHttps = require('../clients/net-https');
import odatajs = require('odatajs');
import Q = require('q');
import app = require('../app');

odatajs.oData.net.defaultHttpClient = netHttps.defaultHttpClient;

var getCrmServiceHeaders = () => {
    return {
        "Authorization": `Bearer ${app.getToken() }`,
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "OData-MaxVersion": "4.0",
        "OData-Version": "4.0"
    };
}

export function ValidateUsername(username: string): Q.Promise<boolean> {
    var deferred = Q.defer<boolean>();

    var request = {
        requestUri: `${app.getEndpoint() }/new_ValidateUsername`,
        method: "POST",
        headers: getCrmServiceHeaders(),
        data: { "Username": username }
    }

    odatajs.oData.request(request,
        (data, response) => {
            deferred.resolve(data.value);
        },
        (data, response) => { deferred.reject(response); });

    return deferred.promise;
}

export function ValidateLogin(username: string, password: string): Q.Promise<boolean> {
    var deferred = Q.defer<boolean>();

    var request = {
        requestUri: `${app.getEndpoint() }/new_ValidateCredentials`,
        method: "POST",
        headers: getCrmServiceHeaders(),
        data: { "Username": username, "Password": password }
    }

    odatajs.oData.request(request,
        (data, response) => { deferred.resolve(data.value); },
        (data, response) => { deferred.reject(response); });

    return deferred.promise;
}

export function ListInvoices(contactId: string): Q.Promise<{}> {
    var deferred = Q.defer<{}>();

    var request = {
        requestUri: `${app.getEndpoint() }/incidents?$select=title&$filter=customerid eq ${contactId}`,
        method: "GET",
        headers: getCrmServiceHeaders()
    }

    odatajs.oData.request(request,
        (data, response) => { deferred.resolve(data.value); },
        (data, response) => { deferred.reject(response); });

    return deferred.promise;
}