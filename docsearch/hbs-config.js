'use strict'

const Handlebars = require("handlebars");
const fs = require('fs');

const json = fs.readFileSync("site-manifest.json")
const template = fs.readFileSync("docsearch-config.json.hbs").toString()

const data = JSON.parse(json)

require('./hbs-helpers/eq.js').register(Handlebars)
require('./hbs-helpers/gt.js').register(Handlebars)
require('./hbs-helpers/rank.js').register(Handlebars)
require('./hbs-helpers/versioned.js').register(Handlebars)
require('./hbs-helpers/versionless.js').register(Handlebars)

const fn = Handlebars.compile(template)
console.log(fn(data))
