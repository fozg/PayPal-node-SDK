// This class was generated on Tue, 05 Dec 2017 14:33:40 PST by version 0.1 of Braintree SDK Generator
// templateCreateRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Creates a template.
 **/

class TemplateCreateRequest {

  constructor() {
    this.path = '/v1/invoicing/templates?';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  requestBody(body) {
    this.body = body;
    return this;
  }
}

module.exports = {TemplateCreateRequest: TemplateCreateRequest};