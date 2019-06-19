function PromotionCode(min, max) {
  var promotionCode = Math.floor(min + Math.random()*(max + 1 - min));
  return promotionCode;
}
var promoCode = PromotionCode(1111, 9999)
var x = document.getElementsByClassName("promo-code");
var i;
for (i = 0; i < x.length; i++) {
  x[i].innerHTML = promoCode;
}

function addDays(n) {
  var t = new Date();
  t.setDate(t.getDate() + n);
  var month = "0" + (t.getMonth() + 1);
  var date = "0" + t.getDate();
  month = month.slice(-2);
  date = date.slice(-2);
  var exDate = t.getFullYear() + "-" + month + "-" + date;
  return exDate;
}
var x = document.getElementsByClassName("expiration-date");
var i;
for (i = 0; i < x.length; i++) {
  x[i].innerHTML = addDays(7);
}
