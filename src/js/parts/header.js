import $ from "jquery";

const burger = $('button[data-menu]');
const menu = $('aside[data-menu]');
const search = $('#ajaxsearchlite1');

burger.on('click', (evt) => {
    evt.preventDefault();
    burger.toggleClass('button-burger--opened');
    menu.toggleClass('sidebar--opened');
    search.toggleClass('opened');

    if(menu.hasClass('sidebar--opened')){
        $('body').css('overflow', 'hidden');
    } else{
        $('body').attr('style', '');
    }
})