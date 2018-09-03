console.log('Metric Chrome Extension running...');
var content = document.body.innerHTML;
var regex = /(?:0|[1-9]\d*)\s*(in(ch(es)?)?|acre(s)?|ft|foot|feet|mi(le(s)?)?|lb|pound(s)?|yd|yard(s)?)/g;
var matches = content.match(regex);
matches.forEach(function(match) {
  var qty = new Qty(match);
  var ext = '';
  if (qty.kind() === 'length') {
    ext = 'm';
  } else if (qty.kind() === 'mass') {
    ext = 'kg';
  }
  var converted = qty.to(ext).toString();
  console.log(`- ${match} > ${converted}`);
  content = content.replace(match, `<span class="metric" title="${match}">${converted}</span>`);
});
document.body.innerHTML = content;
console.log('Metric Chrome Extension finished!');