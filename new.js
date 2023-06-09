$('.projTile').click(function() {
    let title = $(this).find('.tileTitle').html();
    let description = $(this).find('.tileDescription').html();
  let imgNum = $(this).find('.tileImagesContainer').find('img').length;
  let imgArr = [];
  var i;
  for (i=0; i < imgNum; i++) {
    imgArr.push($(this).find('.tileImagesContainer').find('img:eq(' + i + ')').attr('src'));
  }
  // alert(imgArr[2].attr('src'));
  var imgTracker = 0;
    $('.bodyOverlay').css({
        'display': 'flex',
    })
  setTimeout(function() {
    $('.overlayContentContainer').css({
      'opacity': '1',
      'transform': 'translateY(0)',
    })
  }, 5)
    $('.overlayContentTitle').html(title);
    $('.overlayContentTextContainer').html(description);
  $('.overlayCaraImgCont').attr('src', imgArr[imgTracker]);
  $('.leftArr').click(function(){
    imgTracker = ((((imgTracker - 1) % imgNum) + imgNum) % imgNum) ;
    $('.overlayCaraImgCont').attr('src', imgArr[imgTracker]);
  })
  $('.rightArr').click(function(){
    imgTracker = (imgTracker + 1) % imgNum;
    $('.overlayCaraImgCont').attr('src', imgArr[imgTracker]);
  })
})
$('.overlayContentClose').click(function(){
  setTimeout(function() {
    $('.bodyOverlay').css({
      'display': 'none',
    })
  }, 300)
  $('.overlayContentContainer').css({
    'opacity': '0',
    'transform': 'translateY(20px)',
  })
  $('.overlayCaraImgCont').attr('src', "");
});