import $, { get } from 'jquery';
import hui from './ajax';
const letterButton = $('button[data-letter]');
const inputSearch = $('input.thesaurus_search');
const mainContainer = letterButton.closest('.site-main_main-section');

const getTezaurus = (data) => {
    const response = JSON.parse(data);
    mainContainer.html(response.html);
}
window.onpopstate = function(e){
    if(e.state == 'tez'){
        e.preventDefault();
    }
};
$(document).on('click', 'button[data-letter]', (evt) => {
    evt.preventDefault();
    console.log(evt.target);
    history.pushState('tez', '', window.location.origin + '/tezaurus/');
    const target = $(evt.currentTarget);
    const letterItem = target.data('letter');
    let dataTezaurus = {
        action: 'search_by_letter',
        letter: letterItem
    };

    
    $('.letter.letter--current').removeClass('letter--current');
    target.addClass('letter--current');
    hui.getRequest('GET', dataTezaurus, getTezaurus);
});

$(document).on('change', 'input.thesaurus_search', () => {
    let dataTezaurus = {
        action: 'search_by_letter',
        letter: $('input.thesaurus_search').val().trim().toLowerCase()
    };
    hui.getRequest('GET', dataTezaurus, getTezaurus);
});

