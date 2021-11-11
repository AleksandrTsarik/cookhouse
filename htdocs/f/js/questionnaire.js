"use strict";

var FormVal = {
  elPhone: '.js-phone-mask',
  elDate: '.js-birthday-mask',
  init: function init() {
    var t = this;
    $(t.elPhone).find('input').mask('+7 (000) 000 00 00');
    $(t.elDate).find('input').mask('00-00-0000');
  }
};
$(function () {
  FormVal.init();
});