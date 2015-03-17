var $ = require('jquery');
global.jQuery = require("jquery");
var bootstrap = require('bootstrap');
var datepicker = require('../vendor/bootstrap-datepicker/bootstrap-datepicker.js');
var validate = require('../vendor/jquery-validate/jquery.validate.js');

$(document).ready(function () {
  $(".js-datepicker").datepicker();
  $(".js-validate").validate();
});
