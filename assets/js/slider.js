$(document).ready(function (){
    let position = 0;
    const slideToShow = 2;
    const slideToScroll = 1;

    const container = $('.slider__container');
    const list = $('.slider__list');
    const item = $('.slider__item');
    const itemWidth = container.width() / slideToShow;

    item.forEach(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        })
    });
});