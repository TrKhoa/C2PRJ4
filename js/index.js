
function printnew(i) {
  return '<div class="card my-3">\
<div class="row no-gutters"><div class="col-12 col-sm-5">\
<img class="card-img" src="' + news.img[i].src + '" alt="Card">\
</div><div class="col-12 col-sm-7"><div class="card-body">\
<a href="../pages/detail.html#id='+i+'" target="_blank">\
<h4 class="card-title">' + news.ttl[i].ttl + '</h4>\
</a><p class="card-text descr-4">' + news.descr[i].arti + '</p>\
</div></div></div></div>'
}

function printnew2(i) {
  return '<div class="card my-3"><div class="row no-gutters"><div class="col-12 col-sm-5">\
  <img class="card-img" src="../' + news.img[i].src + '" alt="Card">\
  </div><div class="col-12 col-sm-7"><div class="card-body">\
  <a href="detail.html#id='+i+'" target="_blank">\
  <h4 class="card-title">' + news.ttl[i].ttl + '</h4></a>\
  <p class="card-text descr-4">' + news.descr[i].arti + '</p>\
  </div></div></div></div>'
}

function ani(element, animate, animate2) {
  $(element).removeClass('animate__animated animate__' + animate2);
  $(element).addClass('animate__animated animate__' + animate);
}

function getData(){
  var data = $('.search-inp').val();
  ani('.card', 'backOutLeft', 'backOutLeft');
  ani('.mainbox', 'backOutLeft', 'backOutLeft');
  ani('.card', 'backOutLeft', 'backOutLeft');
  $('.annou').text("Kết quả tìm kiếm cho: "+data);
  setTimeout(function () {
    $('.card').remove();
    $('.mainbox').remove();
    for(var i =0; i< newsKey.length;i++){
    var compare = news.ttl[i].ttl.toLowerCase();
      if(compare.includes(data)){
        ani('.result', 'backInLeft', 'backInLeft');
        ani('.resultpage', 'backInLeft', '');
        $('.result').append(printnew(i));
        $('.resultpage').append(printnew2(i));
      }
    }
  }, 1000);
}

//Load
$(window).on('load', function() {
  $('.backdrop-2').removeClass('d-none');
  $('.backdrop-2').addClass('opacity-100');
  $('.loading').removeClass('d-none');
  setTimeout(function () {
    ani('.backdrop-2', 'fadeOut', 'fadeInt');
    ani('.loading', 'fadeOut', 'fadeInt');
    setTimeout(function () {
      $('.backdrop-2').addClass('d-none');
      $('.backdrop-2').removeClass('opacity-100');
    }, 1000);
    $('.loading').addClass('d-none');
  }, 2000);
});

$(document).ready(function() {
  for (var i = 5; i > 0; i--) {
    $('.result').append(printnew(i-1));
  }

  $('.search-btn').click(function() {
    ani('.backdrop', 'fadeIn', 'fadeOut');
    ani('.search-box', 'fadeIn', 'fadeOut');
      $('.backdrop').removeClass('d-none');
      $('.search-box').removeClass('d-none');
  });

  $('.search-btn-ac').click(function() {
    getData();
  });

  $('.backdrop, .search-btn-ac').click(function() {
    ani('.backdrop', 'fadeOut', 'fadeIn');
    ani('.search-box', 'fadeOut', 'fadeIn');
    setTimeout(function () {
      $('.backdrop').addClass('d-none');
      $('.search-box').addClass('d-none');
    }, 1000);
  });

});
