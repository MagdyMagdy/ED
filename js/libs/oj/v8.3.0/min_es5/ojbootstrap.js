/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define([],function(){"use strict";var e;return{whenDocumentReady:function(){return e||(e="loading"===document.readyState?new Promise(function(e){document.addEventListener("DOMContentLoaded",function n(){document.removeEventListener("DOMContentLoaded",n),e()})}):Promise.resolve()),e}}});