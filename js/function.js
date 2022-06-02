$(function(){

const $slide = $('section > .slide > ol');

const $btnPrev = $('.prev');
const $btnNext = $('.next');


//이전버튼
$btnPrev.on('click', function(evt){
  evt.preventDefault();

  $slide.stop().animate({
    left : '0'
  })

});

//다음버튼
$btnNext.on('click', function(evt){
  evt.preventDefault();

  $slide.stop().animate({
    left : '-970px'
  })
});
  
});