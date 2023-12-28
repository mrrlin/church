

$(document).ready(function (){
  let position = 0;
  const slidesToShow = 3;
  const slidesToScroll = 1;

  const container = $('.slider__container');
  const track = $('.slider__track');
  const item = $('.slider__item');
  const itemCount = $(item.length)
  const btnPrev = $('.slider__button_prev');
  const btnNext = $('.slider__button_next');
  const itemWidth = container.width() / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;


  item.each(function (index, item) {
      $(item).css({
          minWidth: itemWidth,
      });
  });


  btnNext.click(function () {
      position -= movePosition;
      setPosition()
  });

  btnPrev.click(function () {

      position += movePosition;
      setPosition()
      checkBtn()
  });

  const setPosition = () => {
      track.css({
          transform: `translateX(${position}px)`
      });
      checkBtn()
  };

  const checkBtn = () => {
      btnPrev.prop('disabled', position === 0);
      btnNext.prop('disabled',position <= (itemCount - slidesToShow) * itemWidth);
  };
  checkBtn();
});




