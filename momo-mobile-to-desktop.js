// ==UserScript==
// @name         MOMO Mobile to Desktop
// @namespace    http://hchou.me
// @version      0.1
// @description  Redirect MOMO mobile URLs to desktop versions
// @author       Henry Chou
// @match        https://m.momoshop.com.tw/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

;(function () {
  'use strict'

  // Function to replace the search result URL
  function transformSearchURL(url) {
    return url.replace(
      'm.momoshop.com.tw/search.momo?searchKeyword=',
      'www.momoshop.com.tw/search/searchShop.jsp?keyword='
    )
  }

  // Function to replace the product detail URL
  function transformProductDetailURL(url) {
    return url.replace(
      'm.momoshop.com.tw/goods.momo?i_code=',
      'www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code='
    )
  }

  // Get the current URL
  var currentURL = window.location.href

  // Check if it's a search result page
  if (currentURL.includes('m.momoshop.com.tw/search.momo?searchKeyword=')) {
    window.location.replace(transformSearchURL(currentURL))
  }

  // Check if it's a product detail page
  else if (currentURL.includes('m.momoshop.com.tw/goods.momo?i_code=')) {
    window.location.replace(transformProductDetailURL(currentURL))
  }
})()
