var baseUrl = (window.location).href;
var s = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);

function printnew(i) {
  return '<div class="card my-3">\
  <div class="row no-gutters"><div class="col-12 col-sm-5">\
  <img class="card-img" src="../' + news.img[i].src + '" alt="Card">\
  </div><div class="col-12 col-sm-7"><div class="card-body">\
  <a href="../pages/detail.html#id='+i+'" target="_blank">\
  <h4 class="card-title">' + news.ttl[i].ttl + '</h4></a></div></div></div></div>'
}

function ani(element, animate, animate2) {
  $(element).removeClass('animate__animated animate__' + animate2);
  $(element).addClass('animate__animated animate__' + animate);
}

$(document).ready(function() {
  $('.ttl').text(news.ttl[s].ttl);
  $('.descr').text(news.descr[s].arti);
  $('.thumb').attr("src","../"+news.img[s].src);
  $('.artical').text(news.main[s].arti);
  for(var i = 5;i>0;i--){
    $('.recom').append(printnew(i-1));\

  }
});
