;(function () {
  'use strict'

  var hljs = require('highlight.js/lib/highlight') 
  hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
  hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
  hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
  hljs.registerLanguage('protobuf', require('highlight.js/lib/languages/protobuf'))
  hljs.registerLanguage('ini', require('highlight.js/lib/languages/ini'))
  hljs.registerLanguage('rust', require('highlight.js/lib/languages/rust'))
  hljs.registerLanguage('java', require('highlight.js/lib/languages/java'))
  hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
  hljs.registerLanguage('groovy', require('highlight.js/lib/languages/groovy'))
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
  hljs.registerLanguage('ini', require('highlight.js/lib/languages/ini'))
  hljs.registerLanguage('properties', require('highlight.js/lib/languages/properties'))
  hljs.registerLanguage('gradle', require('highlight.js/lib/languages/gradle'))
  hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
  hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
  hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))
  hljs.registerLanguage('dockerfile', require('highlight.js/lib/languages/dockerfile'))
  hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
  
  ;[].slice.call(document.querySelectorAll('pre code.hljs[data-lang]')).forEach(function (node) {
    hljs.highlightBlock(node)
  })
})()
