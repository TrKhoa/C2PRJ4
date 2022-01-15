//Lấy Id từ địa chỉ website hiện tại
var baseUrl = (window.location).href;
var s = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
//Insert Card vào phần đề xuất
function printnew(i) {
  return '<div class="card my-3">\
  <div class="row no-gutters"><div class="col-12 col-sm-5">\
  <img class="card-img" src="../' + news.img[i].src + '" alt="Card">\
  </div><div class="col-12 col-sm-7"><div class="card-body">\
  <a href="../pages/detail.html#id='+i+'" target="_blank">\
  <h4 class="card-title">' + news.ttl[i].ttl + '</h4></a></div></div></div></div>'
}
//Insert data theo ID vào bố cục được bố trí sẵn
$(document).ready(function() {
  $('.ttl').text(news.ttl[s].ttl);
  $('.descr').text(news.descr[s].arti);
  $('.thumb').attr("src","../"+news.img[s].src);
  $('.artical').text(news.main[s].arti);
  for(var i = 5;i>0;i--){
    $('.recom').append(printnew(i-1));
  }
});
