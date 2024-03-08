// ==UserScript==
// @name         Wikipedia zh to zh-tw
// @namespace    http://hchou.me
// @version      0.1
// @description  Redirect zh pages to zh-tw
// @author       Henry Chou
// @include      https://zh.wikipedia.org/wiki/*
// @grant        none
// @run-at			 document-start
// ==/UserScript==

;(function () {
  'use strict'

  var currentUrl = window.location.href
  var newUrl = currentUrl.replace('/wiki/', '/zh-tw/')
  window.location.href = newUrl
})()
