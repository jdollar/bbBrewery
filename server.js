var express = require('express')
var request = require('request')
var fs = require('fs')
var app = express()

var configJson = JSON.parse(fs.readFileSync('config/' + getUsername() + '.config.json'))
var apiKey = configJson.api_key
var baseApiUrl = configJson.base_api_url

app.use(function(req, res, next) {
  console.log(req.originalUrl)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.all('*', function(req, res) {
  request(getApiUrl(req), function(error, response, body) {
    passThrough(res, body)
  })
})

app.listen(3000)
console.log('server is running')

function getApiUrl(req) {
  var url = baseApiUrl + req.path + getParamString(req.originalUrl)
  console.log(url)
  return url
}

function getParamString(url) {
  paramsString = '?key=' + apiKey

  if (url.indexOf('?') > -1) {
    paramsString += '&' + url.substring(url.indexOf('?') + 1)
  }

  return paramsString
}

function passThrough(res, responseBody) {
  console.log(responseBody)
  res.send(responseBody)
}

function getUsername() {
  return process.env.USER || process.env.USERNAME
}
